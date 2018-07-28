(function(window) {
	//variables for opening
	var modal = document.querySelector('.modal');
	var modalContainer = document.querySelector('.modal-container');
	var form = document.getElementById('search-form');

	//variable for closing
	var closeModal = document.getElementById('close');

	//variables for search input placeholder 
	var searchInput = document.getElementById('search-form-input');
	var placeholder = document.querySelector('.placeholder');

	//add event listener to display modal
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		modal.classList.add("clicked"); 
		modalContainer.classList.add("display");
	}, false);

	//add event listener to close modal
	closeModal.addEventListener('click', closeTheModel);

	//function to close modal
	function closeTheModel(event) {
		modal.classList.remove("clicked");
		modalContainer.classList.remove("display");
	} 

	//add event listener to the search input field
	searchInput.addEventListener('input', activatePlaceholder);

	//function to keep move placeholder text
	function activatePlaceholder() {
		if (searchInput.value) {
			placeholder.classList.add('placeholder-active');
		}
		else {
			placeholder.classList.remove('placeholder-active');
		}
	}
	
})(window);
