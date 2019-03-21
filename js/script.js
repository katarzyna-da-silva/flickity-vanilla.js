"use strict";

var carouselData = [{
        image: 'images/photo.jpg',
        title: 'Nikon',
        number: 'carousel-cell1',
        description: '<p>Lorem ipsum.</p> <img src="images/photo.jpg" />',
        coords: {
            lat: 52.73057555,
            lng: 4.8936041
        }
    },
    {
        image: 'images/canon.jpg',
        title: 'Canon',
        number: 'carousel-cell2',
        description: '<p>Lorem ipsum.</p> <img src="images/canon.jpg" />',
        coords: {
            lat: 36.5748441,
            lng: 139.2394179
        }
    },
    {
        image: 'images/photo-garage.jpg',
        title: 'garage',
        number: 'carousel-cell3',
        description: '<p>Lorem ipsum.</p> <img src="images/photo-garage.jpg" />',
        coords: {
            lat: 8.3096067,
            lng: -81.3066246
        }
    },
    {
        image: 'images/les-yeux_.jpg',
        title: 'les yeux',
        number: 'carousel-cell4',
        description: '<p>Lorem ipsum.</p> <img src="images/les-yeux_.jpg" />',
        coords: {
            lat: 43.1561681,
            lng: -75.8449946
        }
    },
    {
        image: 'images/artistique.jpg',
        title: 'artistique',
        number: 'carousel-cell5',
        description: '<p>Lorem ipsum.</p> <img src="images/artistique.jpg" />',
        coords: {
            lat: 31.7045206,
            lng: 35.2037665
        }
    }
];

//MUSTACHE pętla

var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;

for (var i = 0; i < carouselData.length; i++) {
    console.log(carouselData);
    listItems += Mustache.render(templateItem, carouselData[i]);
};

results.insertAdjacentHTML('beforeend', listItems);

// karuzela :
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // opcje
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    hash: true,
});

// mapa google :
window.initMap = function () {
    var marker = [];
    var coordsAdd = carouselData[0].coords;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: coordsAdd
    });

    for (var i = 0; i < carouselData.length; i++) {
        coordsAdd = carouselData[i].coords;
        console.log('marker', coordsAdd);
        marker[i] = new google.maps.Marker({
            position: coordsAdd,
            map: map
        });
    }
};

//buttons reset :
var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function () {
    flkty.select(0);
})

// progressbar :
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});