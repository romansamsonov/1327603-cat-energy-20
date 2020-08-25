const headerWrapper = document.querySelector('.header__wrapper');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.header__nav-toggle');

headerWrapper.classList.remove('header__wrapper--nojs');
nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('header__nav-toggle--close-menu');
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
  } else {
    nav.classList.add('nav--closed');
  }
});
