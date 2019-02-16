"use strict";
const fhwWeb = require('fhw-web');

module.exports = {
"createElement" : function () {
	

	const prods = fhwWeb.loadJson("productdata").filter(p => p.slider.indexOf("true") >= 0); 


  return ({
      "page": "index",
      "data": {
        "prods": prods

      }
    });
},

"createElementProdErr" : function () {
	

	const prods = fhwWeb.loadJson("productdata").filter(p => p.slider.indexOf("true") >= 0);

	console.log("dasdad");
  return ({
      "page": "prodError",
      "data": {
        "prods": prods

      }
    });
},

"createElementSiteErr" : function () {
	

	const prods = fhwWeb.loadJson("productdata").filter(p => p.slider.indexOf("true") >= 0);


  return ({
      "page": "siteError",
      "data": {
        "prods": prods

      }
    });
}
}