import $ from 'jquery';

$('.logo-video').on('ended', () => {
  $('.logo-video').remove();
});

