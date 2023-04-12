$('.bannerSlider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.bannerPrev'),
    nextArrow: $('.bannerNext'),
    appendDots: $('.bannerDots'),
    swipe: false,
  });