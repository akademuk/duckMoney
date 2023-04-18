$(document).ready(function() {
  var $scrollbar = $(".informationScroll");
  var $bar = $scrollbar.find(".mCSB_dragger_bar"); // находим полосу скроллбара
  
  $scrollbar.mCustomScrollbar({
    theme: "dark",
    scrollInertia: 200,
    axis: "y",
    scrollbarPosition: "inside",
    mouseWheel: {
      enable: true,
      scrollAmount: 200
    },
    callbacks: {
      whileScrolling: function() {
        var top = Math.abs(parseInt($bar.css("top"))); // находим расстояние от начала полосы до верхней границы родительского блока в пикселях
        var height = $scrollbar.height(); // находим высоту родительского блока в пикселях
        var progress = top / height; // вычисляем прогресс в долях
        var yellow = Math.round(255 * progress); // находим значение желтого цвета в диапазоне от 0 до 255
        
        $bar.css("background-color", "rgb(255, " + yellow + ", 0)"); // устанавливаем цвет полосы в зависимости от прогресса
      }
    }
  });
});

