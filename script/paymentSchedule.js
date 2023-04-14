$('.paymentSchedule button').click(function(event) {
    event.preventDefault();
    
    var paymentScheduleOpen = $('.paymentScheduleOpen');
    var paymentScheduleOpenContainer = $('.paymentScheduleOpenContainer');
    var calcOpen = $('.calcOpen');
    var mainSeoPage = $('.mainSeoPage');
    var btnOpens = $('.btnOpens');

    
    if (paymentScheduleOpen.hasClass('active')) {
      paymentScheduleOpen.animate({height: 0}, 500);
      paymentScheduleOpen.removeClass('active');
      calcOpen.removeClass('active');
      mainSeoPage.removeClass('active');
      btnOpens.removeClass('active');
      paymentScheduleOpenContainer.animate({height: 0}, 500);
    } else {
      paymentScheduleOpen.animate({height: paymentScheduleOpen.prop('scrollHeight')}, 500);
      paymentScheduleOpen.addClass('active');
      calcOpen.addClass('active');
      mainSeoPage.addClass('active');
      btnOpens.addClass('active');
      paymentScheduleOpenContainer.animate({height: paymentScheduleOpen.prop('scrollHeight')}, 500);
    }
  });
  