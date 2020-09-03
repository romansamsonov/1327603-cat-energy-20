const slider = document.querySelector('.slider');
const buttonBefore =document.querySelector('.slider__button--before');
const buttonAfter =document.querySelector('.slider__button--after');
const sliderToggle =document.querySelector('.slider__toggle');

buttonBefore.addEventListener('click', function() {
  slider.classList.add('slider--before');
  slider.classList.remove('slider--after');
});

buttonAfter.addEventListener('click', function() {
  slider.classList.add('slider--after');
  slider.classList.remove('slider--before');
});

sliderToggle.addEventListener('click', function() {
  slider.classList.remove('slider--before');
  slider.classList.remove('slider--after');
});
