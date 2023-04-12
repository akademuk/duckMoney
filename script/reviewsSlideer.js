$('.reviewsSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    centerMode: false,
    centerPadding: '0px',
    variableWidth: false,
    focusOnSelect: true,
    prevArrow: $('.reviewsPrev'),
    nextArrow: $('.reviewsNext'),
    appendDots: $('.reviewsDots'),
  });