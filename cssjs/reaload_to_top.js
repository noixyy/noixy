$(document).ready(function() {
  setTimeout(function() {
    $('html,body').css('scroll-behavior', 'auto');


    window.scrollTo(0, 0);

    $('html,body').css('scroll-behavior', 'smooth');
  }, 0);
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
