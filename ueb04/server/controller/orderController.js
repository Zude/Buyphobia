"use strict";
const fhwWeb = require('fhw-web');
const myHelper = require('../helpers/helpers');

module.exports = {
 
  //Handles and complete the user order
  "completeOrder": function(data) {

      const userCart = data.session.warenkorb;
      const prodData = fhwWeb.loadJson("productdata");
      const orderData = fhwWeb.loadJson("orders");

      //Checks for actual stock, changes the amount (if needed), updates the stock
      for (var i = 0; i < userCart.length; i++) {
        let prodIndex = prodData.map(function(e){ return e.dername; }).indexOf(userCart[i].dername);
        let actualStock = prodData[prodIndex].stock;
        if (userCart[i].anzahl > actualStock)  {
            userCart[i].anzahl = actualStock;
        }
        prodData[prodIndex].stock -= userCart[i].anzahl;
        
      }

      //Push Order Details
      orderData.push({"bestellId":('id-' + Math.random().toString(36).substr(2, 16)),
                      "sessionId":data.session["session-id"],
                      "Anrede": data.request.post.Anrede,
                      "Vorname": data.request.post.Vorname,
                      "Nachname": data.request.post.Nachname,
                      "Strasse": data.request.post.Strasse,
                      "Hausnummer": data.request.post.Hausnummer,
                      "Postleitzahl": data.request.post.Postleitzahl,
                      "email": data.request.post.email,
                      "Express": data.request.post.Express,
                      "Warenkorb": userCart,
                      "Total": myHelper.prodSumTotal(userCart)

                    });

      fhwWeb.saveJson("productdata", prodData);
      fhwWeb.saveJson("orders", orderData);
       data.session.warenkorb = []; 

     return ({
      "redirect": "/produkte"
    });
    }
}