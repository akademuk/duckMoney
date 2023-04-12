$(document).ready(function() {
    $(".informationScroll").mCustomScrollbar({
      theme: "dark",
      scrollInertia: 200,
      axis: "y",
      scrollbarPosition: "inside",
      mouseWheel: {
        enable: true,
        scrollAmount: 200
      }
    });
  });
  