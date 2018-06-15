(function(window) {

//var
var dot = document.querySelectorAll('span.dot');
var projOneSlide = document.querySelectorAll('.proj1slide');
var arrow = document.querySelectorAll('.arrow');
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
	for (var b = 0; b < projOneSlide.length; b++) {
		if (projOneSlide[b].classList.contains('active')) {
			projOneSlide[b].classList.remove('active')
		}
		if (this.dataset.slide === projOneSlide[b].id) {
			projOneSlide[b].classList.add('active');
		}
	}
}

function arrowNav() {
	for (var b = 0; b < projOneSlide.length; b++) {
		if (projOneSlide[b].classList.contains('active')) {
			projOneSlide[b].classList.remove('active');
		}
	}
	//make first slide not active
	projOneSlide[currentSlide].className = 'proj1slide';
  	//go to the next slide, the modulo cycles back to 0 if at the end of slides, ie: 1%3 = 1, 2%3 = 2, 3%3 = 0
  	currentSlide = (currentSlide+1)%projOneSlide.length;
  	//sect active class to the next slide
  	projOneSlide[currentSlide].className = 'proj1slide active';
}

})(window);

