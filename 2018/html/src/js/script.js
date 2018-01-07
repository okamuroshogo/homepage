import $ from 'jquery';

const logoTexts = ['.hello', '.okamuro'];
let index = 0;

const logoAnimate = function(){
  if(index < 0) { index++; return; }
  $(logoTexts[index] + ' .txt').addClass('fadeout');
    setTimeout(function(){
      $(logoTexts[index] + ' .txt').removeClass("fadeout");
      $(logoTexts[index]).hide();
      index++;
      index %= logoTexts.length;
      $(logoTexts[index]).show().css('display', 'flex');
    }, 2000);
};

$('.logo-video').on('ended', () => {
  $('.logo-video').hide();
  $(logoTexts[index]).show().css('display', 'flex');
  setInterval(logoAnimate, 5000);
});

