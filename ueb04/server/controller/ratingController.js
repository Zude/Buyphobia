"use strict";
const fhwWeb = require('fhw-web');
const myHelper = require('../helpers/helpers');

module.exports = {
  "handleRating": function(data) {   
    const thisName = data.request.post.nam;
    let allRating = fhwWeb.loadJson("ratings");
    let rate = allRating.find(p => p.dername.indexOf(thisName) >= 0);

    if (rate == {} || rate == undefined) {
      allRating.push({"dername": thisName,"rating": []});
    }

    allRating.find(p => p.dername.indexOf(thisName) >= 0).rating.push(data.request.post);

    
   


  
    fhwWeb.saveJson("ratings", allRating);
    return ({
      "redirect": ("/details?dts=" +thisName)
    });

  }
}