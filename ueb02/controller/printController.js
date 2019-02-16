"use strict";
const fhwWeb = require('fhw-web');
const myHelper = require('../helpers/helpers');

module.exports = {

  //Handles and complete the user order
  "handlePrintView": function(data) {
    const id = data.request.get.id;
    let order = undefined;
    if (id != undefined) {

      order = fhwWeb.loadJson("orders").find(p => p.bestellId.indexOf(id) >= 0);

      if ((order != undefined) && (order != {}) && (order.bestellId === id)) {
        return ({
          "page": "printSite",
          "data": {
            "userdata": order
          }
        });
      }  
    }

    return ({
      "redirect": ("/*")
    });


  }
}