(function(window) {
	//var
	var modal = document.querySelector('.modal');
	var modalContainer = document.querySelector('.modal-container');
	var form = document.getElementById('search-form');

	//add event listener
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		modal.classList.add("clicked"); 
		modalContainer.classList.add("display");
	}, false);

})(window);