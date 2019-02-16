let ourProducts = document.querySelector('img');
let ourDiv = Array.from(document.querySelectorAll('.detpart3'));
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

ourProducts.addEventListener('mouseover', function(e) {
	this.classList.add("translatePosZ");
	for (var i = 0; i <= 1; i++) {
	ourDiv[i].classList.add('trans');
}
	h3.classList.add('trans');
	p.classList.add('trans');
});

ourProducts.addEventListener('mouseout', function(e) {
	this.classList.remove("translatePosZ");
	for (var i = 0; i <= 1; i++) {
	ourDiv[i].classList.remove('trans');
}
	h3.classList.remove('trans');
	p.classList.remove('trans');
});



