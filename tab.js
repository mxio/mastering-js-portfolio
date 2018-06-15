(function(window) {

var label = document.querySelectorAll('.tab-wrapper label');
  
window.addEventListener('load', function load(event) {
    label[0].classList.add('tab-clicked');
    label[0].nextElementSibling.classList.add('tab-show');
})
  
function toggleTabs() {
  for (var i = 0; i < label.length; i++) {
    if (label[i].classList.contains('tab-clicked')) {
        label[i].classList.remove('tab-clicked');
    }
    if (label[i].nextElementSibling.classList.contains('tab-show')) {
        label[i].nextElementSibling.classList.remove('tab-show');
    }
  }
  this.classList.add('tab-clicked');
  this.nextElementSibling.classList.add('tab-show');
    
}
  
for (var i = 0; i < label.length; i++) {
  label[i].addEventListener('click', toggleTabs);
}
  
})(window);