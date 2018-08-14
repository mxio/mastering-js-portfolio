(function(window) {
	// variables for opening and closing menu
	var menu = document.querySelector('.material-icons.menu');
	var siteWrapper = document.getElementById('site-wrapper');
	var close = document.getElementById('close-menu');
	var radio = document.querySelector('#proj-2');
	var menuLink = document.querySelectorAll('.menu-link');
	var section = document.querySelectorAll('section.tab-content');
	var tab = document.querySelectorAll('.tab label');
	var displaySection = document.querySelector('section.tab-content');
	var mobileLabel = document.querySelectorAll('label.mobile');


	// add event listener
	menu.addEventListener('click', openMenu);
	close.addEventListener('click', closeMenu);

	for (var a = 0; a < menuLink.length; a++) {
		menuLink[a].addEventListener('click', scrollToProj);
	}

	// function
	function openMenu() {
		siteWrapper.classList.add('show-nav');
	}

	function closeMenu() {
		siteWrapper.classList.remove('show-nav');
	}

	function scrollToProj() {
		for (var i = 0; i < section.length; i++) {
			if (this.dataset.labelnum === section[i].dataset.num) {
				section[i].scrollIntoView();
			}
		}
		for (var i = 0; i < section.length; i++) {
			// desktop view
			for (var b = 0; b < tab.length; b++) {
    			if (section[i].classList.contains('display')) {  
    				section[i].classList.remove('display'); 
       				tab[b].classList.remove('label-clicked');
     			}
				if (this.dataset.labelnum === section[i].dataset.num) {
					section[i].classList.add('display');
				}
				if (this.dataset.labelnum === tab[b].dataset.desktoplabel) {
					tab[b].classList.add('label-clicked');
				}
			}
			// mobile view
			for (var c = 0; c < mobileLabel.length; c++) {
				if (mobileLabel[c].classList.contains('label-clicked')) {
					mobileLabel[c].classList.remove('label-clicked');
				}
				if (this.dataset.labelnum === mobileLabel[c].dataset.mobilelabel) {
					mobileLabel[c].classList.add('label-clicked');
				}
			}
		}

	}

})(window)