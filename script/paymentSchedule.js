// Обработчик клика на кнопку "Открыть"
$('.btnOpens').click(function(event) {
  event.preventDefault();
  
  // Добавляем класс 'active' для элементов
  $('.paymentScheduleOpen').addClass('active');
  $('.calcOpen').addClass('active');
  $('.mainSeoPage').addClass('active');
  $('.btnOpens').addClass('active');
  
  // Анимация открытия элемента
  $('.paymentScheduleOpen').animate({height: $('.paymentScheduleOpen').prop('scrollHeight')}, 500);
  $('.paymentScheduleOpenContainer').animate({height: $('.paymentScheduleOpen').prop('scrollHeight')}, 500);
});

// Обработчик клика на кнопку "Закрыть"
$('.btnClose').click(function(event) {
  event.preventDefault();
  
  // Удаляем класс 'active' для элементов
  $('.paymentScheduleOpen').removeClass('active');
  $('.calcOpen').removeClass('active');
  $('.mainSeoPage').removeClass('active');
  $('.btnOpens').removeClass('active');
  
  // Анимация закрытия элемента
  $('.paymentScheduleOpen').animate({height: 0}, 500);
  $('.paymentScheduleOpenContainer').animate({height: 0}, 500);
});
