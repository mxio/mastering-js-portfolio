(function(window) {

//var
var dot = document.querySelectorAll('span.dot-6');
var projSixSlide = document.querySelectorAll('.proj6slide');
var arrow = document.querySelectorAll('.arrow6');
var currentSlide = 0;

//event listener
for (var a = 0; a < dot.length; a++) {
	dot[a].addEventListener('click', changeSlide);
}

for (var i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener('click', arrowNav);
}

//function
function changeSlide() {
	for (var b = 0; b < projSixSlide.length; b++) {
		if (projSixSlide[b].classList.contains('active')) {
			projSixSlide[b].classList.remove('active')
		}
		if (this.dataset.slide6 === projSixSlide[b].id) {
			projSixSlide[b].classList.add('active');
		}
	}
}

function arrowNav() {
	for (var b = 0; b < projSixSlide.length; b++) {
		if (projSixSlide[b].classList.contains('active')) {
			projSixSlide[b].classList.remove('active');
		}
	}
	//make first slide not active
	projSixSlide[currentSlide].className = 'proj6slide';
  	//go to the next slide, the modulo cycles back to 0 if at the end of slides, ie: 1%3 = 1, 2%3 = 2, 3%3 = 0
  	currentSlide = (currentSlide+1)%projSixSlide.length;
  	//set active class to the next slide
  	projSixSlide[currentSlide].className = 'proj6slide active';
}

})(window);
