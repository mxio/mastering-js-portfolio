(function(window){

var label = document.querySelectorAll('.accordion_proj-wrapper label');
 
window.addEventListener('load', function load(event) {
  label[0].classList.add('accordion-clicked'); 
  label[0].nextElementSibling.classList.add('accordion-show');
}) 

function toggleTabs() {

  for (var i = 0; i < label.length; i++) {
    if (label[i].classList.contains('accordion-clicked')) {          
      label[i].classList.remove('accordion-clicked');
    }
    if (label[i].nextElementSibling.classList.contains('accordion-show')) {
      label[i].nextElementSibling.classList.remove('accordion-show');
    }
  }
  this.classList.add('accordion-clicked');
  this.nextElementSibling.classList.add('accordion-show');
}

//add click event listener to each label, then call the toggle function for the clicked label
for (var i = 0; i < label.length; i++) {
  label[i].addEventListener('click', toggleTabs);
}


})(window);