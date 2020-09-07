ymaps.ready(init);
function init() {

  if (window.innerWidth < 768) {
    mapCenter = [59.93863506417266,30.323117499999945];
    mapZoom = 14;
    imageSize = [62, 53];
    imageOffset = [-31, -53];
  } else if (window.innerWidth < 1300) {
    mapCenter = [59.93863506417266,30.323117499999945];
    mapZoom = 15;
    imageSize = [124, 106];
    imageOffset = [-62, -106];
  } else {
    mapCenter = [59.939065737768466,30.318547015838554];
    mapZoom = 16;
    imageSize = [124, 106];
    imageOffset = [-62, -106];
  }

  let myMap = new ymaps.Map('map', {
    center: mapCenter,
    zoom: mapZoom
  });

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    "<div>$[properties.iconContent]</div>"
  ),

  myPlacemark = new ymaps.Placemark([59.93863506417266,30.323117499999945], {
    hintContent: 'Большая Конюшенная, 19/8, Санкт-Петербург'
  }, {
    iconLayout: 'default#imageWithContent',
    iconImageHref: ('img/map-pin.webp' || 'img/map-pin.png'),
    iconImageSize: imageSize,
    iconImageOffset: imageOffset
  });

  myMap.geoObjects.add(myPlacemark);
}
