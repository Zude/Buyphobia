function sliderSwitcher(c) {
	const divs = Array.from(document.querySelectorAll(".sliderElem"));

	for (var i = 0; i < divs.length; i++) {
		divs[i].classList.remove("leftPos");
		divs[i].classList.remove("midPos");
		divs[i].classList.remove("rightPos");
		divs[i].classList.add("notShown");
	

	}

	if (c > divs.length-1) {
		z = c-divs.length;
		divs[z].classList.remove("notShown");
		divs[z].classList.add("leftPos");
	}
	else {
		divs[c].classList.remove("notShown");
		divs[c].classList.add("leftPos");
	}

	if (c+1 > divs.length-1) {
		z = c+1-divs.length;
		divs[z].classList.remove("notShown");
		divs[z].classList.add("midPos");
	}
	else {
		divs[c+1].classList.remove("notShown");
		divs[c+1].classList.add("midPos");
	}
	
	if (c+2 > divs.length-1) {
		z = c+2-divs.length;
		divs[z].classList.remove("notShown");
		divs[z].classList.add("rightPos");
	}
	else {
		divs[c+2].classList.remove("notShown");
		divs[c+2].classList.add("rightPos");
	}
	counter++;
	if (counter > divs.length-1) {
		counter = 0;
	}
	

	
}



const divs = Array.from(document.querySelectorAll(".sliderElem"));
	divs[0].classList.add("leftPos");
	divs[1].classList.add("midPos");
	divs[2].classList.add("rightPos");
	for (var i = 3; i < divs.length; i++) {
		divs[i].classList.add("notShown");

	}


let counter = 0;




let timer = setInterval(sliderSwitcherStart,2000);

function sliderSwitcherStart() {  


	sliderSwitcher(counter);
	
}
