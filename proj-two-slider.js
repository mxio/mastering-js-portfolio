(function(window) {

//var
var dot = document.querySelectorAll('span.dot-2');
var projTwoSlide = document.querySelectorAll('.proj2slide');
var arrow = document.querySelectorAll('.arrow2');
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
	for (var b = 0; b < projTwoSlide.length; b++) {
		if (projTwoSlide[b].classList.contains('active')) {
			projTwoSlide[b].classList.remove('active')
		}
		if (this.dataset.slide2 === projTwoSlide[b].id) {
			projTwoSlide[b].classList.add('active');
		}
	}
}

function arrowNav() {
	for (var b = 0; b < projTwoSlide.length; b++) {
		if (projTwoSlide[b].classList.contains('active')) {
			projTwoSlide[b].classList.remove('active');
		}
	}
	//make first slide not active
	projTwoSlide[currentSlide].className = 'proj2slide';
  	//go to the next slide, the modulo cycles back to 0 if at the end of slides, ie: 1%3 = 1, 2%3 = 2, 3%3 = 0
  	currentSlide = (currentSlide+1)%projTwoSlide.length;
  	//set active class to the next slide
  	projTwoSlide[currentSlide].className = 'proj2slide active';
}

})(window);

