(function(window) {

//var
var dot = document.querySelectorAll('span.dot-5');
var projFiveSlide = document.querySelectorAll('.proj5slide');
var arrow = document.querySelectorAll('.arrow5');
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
	for (var b = 0; b < projFiveSlide.length; b++) {
		if (projFiveSlide[b].classList.contains('active')) {
			projFiveSlide[b].classList.remove('active')
		}
		if (this.dataset.slide5 === projFiveSlide[b].id) {
			projFiveSlide[b].classList.add('active');
		}
	}
}

function arrowNav() {
	for (var b = 0; b < projFiveSlide.length; b++) {
		if (projFiveSlide[b].classList.contains('active')) {
			projFiveSlide[b].classList.remove('active');
		}
	}
	//make first slide not active
	projFiveSlide[currentSlide].className = 'proj5slide';
  	//go to the next slide, the modulo cycles back to 0 if at the end of slides, ie: 1%3 = 1, 2%3 = 2, 3%3 = 0
  	currentSlide = (currentSlide+1)%projFiveSlide.length;
  	//set active class to the next slide
  	projFiveSlide[currentSlide].className = 'proj5slide active';
}

})(window);
