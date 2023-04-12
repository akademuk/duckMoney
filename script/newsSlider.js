if (window.innerWidth < 767) {
    $('.newsContainer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        prevArrow: $('.newsPrev'),
        nextArrow: $('.newsNext'),
        appendDots: $('.newsDots'),
    });
  }
  