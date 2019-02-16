"use strict";
const fhwWeb = require('fhw-web');
const myHelper = require('../helpers/helpers');

module.exports = {
 
  //Load Productdata into product site and handles user search function
  "loadDataProd": function(data) {

    const searchName = data.request.get.search;

    //If there is a search Term, filter products
    if (searchName) {

     const prods = fhwWeb.loadJson("productdata").filter(p => p.dername.toLowerCase().indexOf(searchName.toLowerCase()) >= 0);

      return ({
      "page": "produkte",
      "data": {
        "prods": prods,
        "term" : searchName      }
    });

    }

    // Load Data into the Site
    else {
      const prods = fhwWeb.loadJson("productdata");
      return ({
      "page": "produkte",
      "data": {
        "prods": prods
      }
    });
    }
    
  },

  //Load Productdata into product details site
  "loadDataDet": function(data) {

    const searchedName = data.request.get.dts;

    const ratings = fhwWeb.loadJson("ratings").find(p => p.dername.indexOf(searchedName) >= 0);  

    const toLoad = fhwWeb.loadJson("productdata").find(p => p.dername.indexOf(searchedName) >= 0);
    let prods = undefined;
    if (toLoad != undefined && (toLoad.dername === searchedName)) {
      prods = toLoad;
    }
    
    
    //When there is a wrong search term or non, prodError
    if (prods === undefined || prods.length == 0 || prods == {}) {
      return ({
      "page": "prodError"
    });
    }

    else {
      return ({
      "page": "details",
      "data": {
        "prods": prods,
        "ratings": ratings
      }
    });

    }
    
  }
}