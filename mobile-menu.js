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
			// desktop view, display the section first, then scroll after
			for (var b = 0; b < tab.length; b++) {
    			if (section[i].classList.contains('display')) {
    				// Remove transition for previous open tab, until after scroll
    				section[i].classList.add('noTransition');  
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
					mobileLabel[c].nextElementSibling.classList.add('display');
				}
			}
		}
		for (var i = 0; i < section.length; i++) {
			if (this.dataset.labelnum === section[i].dataset.num) {
				// Remove transition before scroll for current tab
				section[i].classList.add('noTransition');

				section[i].previousElementSibling.scrollIntoView(true);
				section[i].scrollIntoView(true);
				//Add transition for all sections after the tab is scrolled into view
				setTimeout(function(elem, orig) {
					document.querySelectorAll('.proj-accordion section').forEach(function(item) {
						item.classList.remove('noTransition');
					})
				},1000);
			}
		}
	}

})(window)