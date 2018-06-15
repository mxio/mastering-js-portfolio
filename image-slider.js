(function(window){
  //variables
  var thumbnail = document.querySelectorAll('img.thumbnail');
  var display = document.querySelectorAll('div.display img');
  var dot = document.querySelectorAll('.indicator');
  
  //event listener onclick loop through thumbnails
  for (var i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener('click', changeImage);
  }
  //event listener onclick loop through dots
  for (var a = 0; a < dot.length; a++) {
    dot[a].addEventListener('click', changeImage);
  }
  
  //function to show images
  function changeImage() {
    for (var j = 0; j < display.length; j++) {
      if (display[j].classList.contains("active-class")) {
         display[j].classList.remove("active-class");
       } 
      if (this.dataset.number === display[j].id || this.dataset.indicator === display[j].id) {
          display[j].classList.add("active-class");
       }
    }
  }
  
})(window);
