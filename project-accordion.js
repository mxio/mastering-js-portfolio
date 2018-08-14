(function(window) {

//variables
var tab = document.querySelectorAll('.tab label');
var section = document.querySelectorAll('section.tab-content');
var mobileLabel = document.querySelectorAll('label.mobile');

//add event listener
for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', displayContent);
}

for (var n = 0; n < mobileLabel.length; n++) {
  mobileLabel[n].addEventListener('click', displayContent);
}

//default tab
window.addEventListener('load', function load(event) {
  section[0].classList.add('display');
  tab[0].classList.add('label-clicked');
  mobileLabel[0].classList.add('label-clicked');
})

//function
function displayContent() {
  //check to see if active, if so, remove
  for (var a = 0; a < section.length; a++) {
    if (section[a].classList.contains('display')) {   
      section[a].classList.remove('display');  
      //removes desktop active label class
      for (var b = 0; b < tab.length; b++) {
        tab[b].classList.remove('label-clicked');
      }
    }
    //add display class on desktop 
    if (this.dataset.desktoplabel === section[a].dataset.num) {
      this.classList.add('label-clicked');
      section[a].classList.add('display');  
    }
  }

  //removes and adds label active class on mobile
  for (var i = 0; i < mobileLabel.length; i++) {
    if (mobileLabel[i].classList.contains('label-clicked')){
      mobileLabel[i].classList.remove('label-clicked');
    }
    this.classList.add('label-clicked');
  }
}

})(window);