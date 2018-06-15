(function(window) {

//var
var dot = document.querySelectorAll('span.dot-4');
var projFourSlide = document.querySelectorAll('.proj4slide');
var arrow = document.querySelectorAll('.arrow4');
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
	for (var b = 0; b < projFourSlide.length; b++) {
		if (projFourSlide[b].classList.contains('active')) {
			projFourSlide[b].classList.remove('active')
		}
		if (this.dataset.slide4 === projFourSlide[b].id) {
			projFourSlide[b].classList.add('active');
		}
	}
}

function arrowNav() {
	for (var b = 0; b < projFourSlide.length; b++) {
		if (projFourSlide[b].classList.contains('active')) {
			projFourSlide[b].classList.remove('active');
		}
	}
	//make first slide not active
	projFourSlide[currentSlide].className = 'proj4slide';
  	//go to the next slide, the modulo cycles back to 0 if at the end of slides, ie: 1%3 = 1, 2%3 = 2, 3%3 = 0
  	currentSlide = (currentSlide+1)%projFourSlide.length;
  	//set active class to the next slide
  	projFourSlide[currentSlide].className = 'proj4slide active';
}

})(window);
