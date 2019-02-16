"use strict";
const fhwWeb = require('fhw-web');

module.exports = {
  
  //This function fill the right products into the users shopping cart
  "fill": function(data) {

    const nam = data.request.post.nam;
    const amount = parseInt(data.request.post.amount);
    const price = fhwWeb.loadJson("productdata").find(p => p.dername.indexOf(nam) >= 0).price;
    const maxStock = fhwWeb.loadJson("productdata").find(p => p.dername.indexOf(nam) >= 0).stock;

    //if there is no shopping cart, create one
    if (typeof data.session.warenkorb === 'undefined') {
        data.session.warenkorb = [];
    }

    //If there is no similar product inside the cart, push it into it
    if(data.session.warenkorb.filter(p => p.dername.indexOf(nam) >= 0).length == 0){
      data.session.warenkorb.push({
        "dername":nam,
        "anzahl":amount,
        "preis" : price,
        "maxStock": maxStock
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
      status: 200,
      fragment: "cartFragment",
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
    },



    //Load the users shopping cart
    "reloadCart": function(data) {

       let names = data.request.post.artikelName;
      let amountes = data.request.post.amount;
      

  
      if (names !== undefined) {
      for (var i = 0; i < names.length; i++) {
        if (amountes[i]==0) {
      
            const toDeletePos = data.session.warenkorb.map(function(e){ return e.dername; }).indexOf(names[i]);
            data.session.warenkorb.splice(toDeletePos, 1);
          
          
        }
      
        else if (data.session.warenkorb.length  > 0) {

          data.session.warenkorb.find(p => p.dername.indexOf(names[i]) >= 0).anzahl = parseInt(amountes[i]);
        }
        
      }

    }
      const warenkorb = data.session.warenkorb;
      return ({
      status: 200,
      "data": {
        "prods": warenkorb
 
      },
      fragment: "cartFragment"

    });
    }
}