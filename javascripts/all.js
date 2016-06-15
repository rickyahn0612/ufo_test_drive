// This is where it all goes :)
$(document).ready(function(){

  $('#form-popup').on('click', function(e){
    $('#notify-form').fadeIn();
    $('#ufo-overlay').fadeIn();
  });

  var closeElms = $('#ufo-close-button, #ufo-overlay')

  closeElms.on('click', function(e){
    $('#notify-form').fadeOut()
    $('#ufo-overlay').fadeOut();
  });
});

