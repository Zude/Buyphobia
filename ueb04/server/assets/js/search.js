

function mayShow(ele) {
	  let selector = ele;
	  const prices = Array.from(document.querySelectorAll("[data-price]"));
	  let ourDivs = Array.from(document.querySelectorAll(".prods"));		
	for(i = 0; i < prices.length; i++){
		
		ourDivs[i].classList.remove("notShown");
		if (selector.length != 0) { 
				if(selector < parseInt(prices[i].dataset["price"])){
				ourDivs[i].classList.add("notShown");
			}
				else{
					ourDivs[i].classList.remove("notShown");
				}
			}
		else{
			ourDivs[i].classList.remove("notShown");
		}
	}
	
}






const ourSearch = document.querySelector("#search");

ourSearch.addEventListener('keyup', event => {
	
		mayShow(ourSearch.value);
  	
  });



