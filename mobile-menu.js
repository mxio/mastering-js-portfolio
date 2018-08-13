(function(window) {
	// variables
	var menu = document.querySelector('.material-icons.menu');
	var siteWrapper = document.getElementById('site-wrapper');
	var close = document.getElementById('close-menu');

	// add event listener
	menu.addEventListener('click', openMenu);
	close.addEventListener('click', closeMenu);

	// function
	function openMenu() {
		siteWrapper.classList.add('show-nav');
	}

	function closeMenu() {
		siteWrapper.classList.remove('show-nav');
	}

})(window)