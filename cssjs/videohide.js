document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('play_reel_check');
    var reel_container = document.querySelector('.reel_container');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        fadeOut(reel_container);
      } else {
        fadeIn(reel_container);
      }
    });
  
    function fadeOut(element) {
      var opacity = 1;
      var fadeEffect = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.3;
          element.style.opacity = opacity;
        } else {
          clearInterval(fadeEffect);
          element.style.display = 'none';
        }
      }, 50);
    }
  
    function fadeIn(element) {
      var opacity = 0;
      element.style.display = 'block';
  
      var fadeEffect = setInterval(function () {
        if (opacity < 1) {
          opacity += 0.3;
          element.style.opacity = opacity;
        } else {
          clearInterval(fadeEffect);
        }
      }, 50);
    }
  });
  
