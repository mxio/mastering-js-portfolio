(function(window) {

var form = document.getElementById('login');
var email = document.getElementById('email');
var password = document.getElementById('password');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (!validator.isEmailAddress(email.value) || validator.isEmpty(email.value) || !validator.isTrimmed(email.value)) {
		form.className = "invalid"
		email.className = "invalid";
	}	
	if (!validator.isOfLength(password.value, 6) || !validator.isLength(password.value, 8) || validator.isEmpty(password.value) || !validator.isTrimmed(password.value)) {
		form.className = "invalid"
		password.className = "invalid";
	}
}, false);


email.addEventListener('input', function (event) {
	if (validator.isEmailAddress(email.value) || !validator.isEmpty(email.value) || validator.isTrimmed(email.value)) {
		form.className = "valid"
		email.className = "valid";
	}	
}, false);

password.addEventListener('input', function (event) {
	if (validator.isOfLength(password.value, 6) || validator.isLength(password.value, 8) || !validator.isEmpty(password.value) || validator.isTrimmed(password.value)) {
		form.className = "valid"
		password.className = "valid";
	}	
}, false);

})(window);