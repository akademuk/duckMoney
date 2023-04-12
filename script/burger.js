$(document).ready(function() {
    $('#menu-toggle').on('change', function() {
      if ($(this).is(':checked')) {
        $('.menu').addClass('open');
        $('.top-nav').addClass('background');
        $('.body').addClass('overflow');
      } else {
        $('.menu').removeClass('open');
        $('.top-nav').removeClass('background');
        $('.body').removeClass('overflow');
      }
    });
  });
  