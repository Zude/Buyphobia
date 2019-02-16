"use strict";
const fhwWeb = require('fhw-web');


module.exports = {
 
  //Load Productdata into product site and handles user search function
  "loadDataProd": function(data) {

      
      return {
        status: 200,
        json: fhwWeb.loadJson("products")
      }
    
  },

  //Load Productdata into product details site
  "loadDataDet": function(data) {

    const searchedName = data.request.get.dername;

    

    const toLoad = fhwWeb.loadJson("products").find(p => p.dername.indexOf(searchedName) >= 0);
    let prods = undefined;
    
    prods = toLoad;
    
    
    
    
    

    return {
      status: 200,
      json: prods
    }
    
  }
}