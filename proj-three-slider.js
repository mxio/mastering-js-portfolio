(function(window) {

//var
var dot = document.querySelectorAll('span.dot-3');
var projThreeSlide = document.querySelectorAll('.proj3slide');
var arrow = document.querySelectorAll('.arrow3');
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
	for (var b = 0; b < projThreeSlide.length; b++) {
		if (projThreeSlide[b].classList.contains('active')) {
			projThreeSlide[b].classList.remove('active')
		}
		if (this.dataset.slide3 === projThreeSlide[b].id) {
			projThreeSlide[b].classList.add('active');
		}
	}
}

function arrowNav() {
	for (var b = 0; b < projThreeSlide.length; b++) {
		if (projThreeSlide[b].classList.contains('active')) {
			projThreeSlide[b].classList.remove('active');
		}
	}
	//make first slide not active
	projThreeSlide[currentSlide].className = 'proj3slide';
  	//go to the next slide, the modulo cycles back to 0 if at the end of slides, ie: 1%3 = 1, 2%3 = 2, 3%3 = 0
  	currentSlide = (currentSlide+1)%projThreeSlide.length;
  	//set active class to the next slide
  	projThreeSlide[currentSlide].className = 'proj3slide active';
}

})(window);
