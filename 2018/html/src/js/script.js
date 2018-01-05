import $ from 'jquery';

const logoTexts = ['.hello', '.okamuro'];
let index = 0;

const logoAnimate = function(){
  console.log(index);
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
  $('.logo-video').remove();
  $(logoTexts[index]).show().css('display', 'flex');
  setInterval(logoAnimate, 5000);
});

$('.okamuro, .hello').hover(
  function () {
    const name = $(this).attr("class");
    console.log(name);
    $('.' + name + ' .txt').addClass('fadeout');
    setTimeout(function(){
      $('.' + name).hide();
      $('.' + name + ' .txt').removeClass("fadeout");
    }, 2000);
  }
);

