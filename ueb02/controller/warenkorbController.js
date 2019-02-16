"use strict";
const fhwWeb = require('fhw-web');

module.exports = {
  
  //This function fill the right products into the users shopping cart
  "fill": function(data) {

    const nam = data.request.post.nam;
    const amount = parseInt(data.request.post.amount);
    const price = fhwWeb.loadJson("productdata").find(p => p.dername.indexOf(nam) >= 0).price;

    //if there is no shopping cart, create one
    if (typeof data.session.warenkorb === 'undefined') {
        data.session.warenkorb = [];
    }

    //If there is no similar product inside the cart, push it into it
    if(data.session.warenkorb.filter(p => p.dername.indexOf(nam) >= 0).length == 0){
      data.session.warenkorb.push({
        "dername":nam,
        "anzahl":amount,
        "preis" : price
      });
    }

    //If there is already the same product, just change the amount
    else{
      let oldAmount = data.session.warenkorb.find(p => p.dername.indexOf(nam) >= 0).anzahl;
      data.session.warenkorb.find(p => p.dername.indexOf(nam) >= 0).anzahl = oldAmount+amount;
    }
    
    return ({
      "redirect": "/produkte"
    });
    },



    //Load the users shopping cart
    "loadCart": function(data) {
      
      const warenkorb = data.session.warenkorb;
      return ({
      "page": "warenkorb",
      "data": {
        "prods": warenkorb
      }
    });
    },


    //Deletes given product out of the shopping cart
    "deleteProd": function(data) {
      
      const toDeletePos = data.session.warenkorb.map(function(e){ return e.dername; }).indexOf(data.request.post.nam);

      data.session.warenkorb.splice(toDeletePos, 1);

      return ({
      "redirect": "/cart"
      
    });
    }
}