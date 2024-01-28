$(function () {
  const wHeight = $(window).height();
  const wScroll = $(window).scrollTop();

  $(".worksfade").each(function () {
    const bPosition = $(this).offset().top;

    if (wScroll > bPosition - wHeight + 200 || wScroll > bPosition) {
      $(this).addClass("worksfadeIn");
    }
  });

  $(window).scroll(function () {
    const wScroll = $(window).scrollTop();
    $(".worksfade").each(function () {
      const bPosition = $(this).offset().top;
      
      if (wScroll > bPosition - wHeight + 200) {
        $(this).addClass("worksfadeIn");
      }
    });
  });
});
