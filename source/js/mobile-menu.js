const headerWrapper = document.querySelector('.header__wrapper');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.header__nav-toggle');
const nojs = document.querySelector('.no-js');

nojs.classList.remove('no-js');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('header__nav-toggle--close-menu');
  nav.classList.toggle('nav--closed')
});
