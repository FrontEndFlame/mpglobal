document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function () {
    scrollRotate();
  };
  
  function scrollRotate() {
    let images = document.querySelectorAll('.asterisk');
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }
  }



});