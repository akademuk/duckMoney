$(document).ready(function() {
  var loanAmount = $('#loan-amount').val();
  var loanDuration = $('#loan-duration').val();
  var resultBlock = $('#result');
  
  function updateResult() {
    var interest = ((loanAmount * 0.01) / 30 * loanDuration).toFixed(2);
    var date = new Date();
    date.setDate(date.getDate() + parseInt(loanDuration));
    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();
    var formattedDate = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();
    var sum = loanAmount;
    var percent = interest;
    var resultSum = parseFloat(sum) + parseFloat(percent);
    $('#result').find('.resultSum').eq(0).find('span').text(sum);
    $('#result').find('.resultSum').eq(1).find('span').text(percent);
    $('#result').find('.resultSum').eq(2).find('#resultDate').text(formattedDate);
    $('#result').find('.resultSum').eq(2).find('#resultSum').text(resultSum);
    $('#result').find('.resultSum').eq(2).find('#resultDateOpen').text(formattedDate);
    $('#result').find('.resultSum').eq(2).find('#resultSumOpen').text(resultSum);  
    $('#resultDateOpen').text(formattedDate);  
    $('#resultSumOpen').text(resultSum + "грн."); 
  }
  
  
  $('#loan-amount').on('input', function() {
    loanAmount = parseInt($(this).val());
    $('#loan-amount-value').text(loanAmount + ' грн');
    var currentValue = parseInt($(this).val());
    var minValue = parseInt($(this).attr('min'));
    var maxValue = parseInt($(this).attr('max'));
    var range = (maxValue - minValue);
    var percent = ((currentValue - minValue) / range) * 100;
    $('#loan-amount').css('background', 'linear-gradient(to right, #FFCE00 ' + percent + '%, #E6E6E6 ' + percent + '%)');
    updateResult();
  });
  
  updateResult();
  
  $('.rangeContainer p').on('click', function() {
    var currentValue = $('#loan-amount').val();
    var step = parseInt($('#loan-amount').attr('step'));
    var min = parseInt($('#loan-amount').attr('min'));
    var max = parseInt($('#loan-amount').attr('max'));
    
    if ($(this).attr('id') === 'mine') {
      if (currentValue > min) {
        $('#loan-amount').val(parseInt(currentValue) - step).trigger('input');
      }
    } else if ($(this).attr('id') === 'plus') {
      if (currentValue < max) {
        $('#loan-amount').val(parseInt(currentValue) + step).trigger('input');
      }
    }
    updateResult();
  });

  $('#mineDate').click(function() {
    var currentValue = parseInt($('#loan-duration').val());
    var minValue = parseInt($('#loan-duration').attr('min'));
    var maxValue = parseInt($('#plusDate').attr('max'));
  
    if (currentValue > minValue) {
      $('#loan-duration').val(currentValue - 1).trigger('input');
    }
    updateResult(); // add this line to update the result after changing the loan duration
  });
  function updateDurationBackground() {
    var currentValue = parseInt($('#loan-duration').val());
    var minValue = parseInt($('#loan-duration').attr('min'));
    var maxValue = parseInt($('#loan-duration').attr('max'));
    var range = maxValue - minValue;
    var percent = ((currentValue - minValue) / range) * 100;
    $('#loan-duration').css('background', 'linear-gradient(to right, #FFCE00 ' + percent + '%, #E6E6E6 ' + percent + '%)');
  }
  
  $('#loan-duration').on('input', function() {
    loanDuration = parseInt($(this).val());
    $('#loan-duration-value').text(loanDuration);
    updateResult();
    updateDurationBackground(); // add this line to update the duration background
  });
  
  updateDurationBackground(); // call this function to set the initial background
  
  
  
  $('#plusDate').click(function() {
    var currentValue = parseInt($('#loan-duration').val());
    var minValue = parseInt($('#mineDate').attr('min'));
    var maxValue = parseInt($('#loan-duration').attr('max'));
  
    if (currentValue < maxValue) {
      $('#loan-duration').val(currentValue + 1).trigger('input');
      updateResult(); // Add this line to update the result after changing the loan duration
    }
  });
  
  

  $('#loan-amount').on('input', function() {
    loanAmount = parseInt($(this).val());
    $('#loan-amount-value').text(loanAmount + ' грн');
    updateResult();
  });
  
  $('#loan-duration').on('input', function() {
    loanDuration = parseInt($(this).val());
    $('#loan-duration-value').text(loanDuration);
    updateResult();
  });
});
