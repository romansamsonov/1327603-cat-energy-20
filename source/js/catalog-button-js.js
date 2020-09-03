let productButtons = document.querySelectorAll('.product__button');
let productMoreButtons = document.querySelectorAll('.product-more__button');

for (let productButton of productButtons) {
  productButton.addEventListener('click', function (evt) {
    evt.preventDefault();
  });
}

for (let productMoreButton of productMoreButtons) {
  productMoreButton.addEventListener('click', function (evt) {
    evt.preventDefault();
  });
}
