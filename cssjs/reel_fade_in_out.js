$(document).ready(function () {
  var checkbox = $('#play_reel_check');
  var reel_container = $('.reel_container');

  checkbox.change(function () {
    if (checkbox.prop('checked')) {
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
        element.css('opacity', opacity);
      } else {
        clearInterval(fadeEffect);
        element.css('display', 'none');
      }
    }, 50);
  }

  function fadeIn(element) {
    var opacity = 0;
    element.css('display', 'block');

    var fadeEffect = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.3;
        element.css('opacity', opacity);
      } else {
        clearInterval(fadeEffect);
      }
    }, 50);
  }
});
  
