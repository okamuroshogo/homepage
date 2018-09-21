import $ from 'jquery';

$(window).scroll(function() {
  if (window.pageYOffset > 0) {
    $('.scroll-bellow').hide();
  } else { 
    $('.scroll-bellow').show();
  }
});
