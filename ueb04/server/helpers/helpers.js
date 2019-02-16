"use strict";
const fhwWeb = require('../node_modules/fhw-web/lib/fhw-web');

module.exports = {

	// Calculate the total Price of one product
	"prodSum" : function(count, price){

		return(count*price);
	},
	
	// Calculate the Total Sum of the Shopping Cart
	"prodSumTotal" : function(prods){
		let counter = 0;
		if (typeof(prods)!= "undefined") {
			for (var i = 0; i < prods.length; i++) {
			counter += prods[i].anzahl * prods[i].preis;
		}

		}
		

		return(counter);
	},

	// Checks if the given Object is empty
	"checkCartEmpty" : function(cart){
		if (cart.length == 0) {
			return("Your cart is empty");
		}
		return("");
		}
		,

	
	"checkMaxStock" : function(name){
         const anzahl = fhwWeb.loadJson("productdata").find(p => p.dername.indexOf(name) >= 0).anzahl;

		
			return(anzahl);
		
		
	}
		

/*,
	// Checks if the given Object is empty
	"findByName" : function(name, file, placeHolder){
		
		return(fhwWebs.loadJson(file).find(p => p.placeHolder.indexOf(name) >= 0));

		}

	
*/

	
}