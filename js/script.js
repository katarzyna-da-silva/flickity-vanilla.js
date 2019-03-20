
'use strict';
(function(){ 

	// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
  	window.initMap = function() {
		
		// Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
		var uluru = {lat: -25.363, lng: 131.044};
		
		// W zmiennej map zapisujemy nową instancję obiektu Map. 
		var map = new google.maps.Map(document.getElementById('map'), {
			// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
			zoom: 4,
			center: uluru
		});
		
		// Definiujemy marker jako nową instancję obiektu Marker.
		var marker = new google.maps.Marker({
			// I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
			position: uluru,
			map: map
		}); 
	}	

initMap();

})();  

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

// progressbar :

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

// for button:

var nextButton = document.querySelector('.button-next');
nextButton.addEventListener('click', function () {
    flkty.next();
});

var previousButton = document.querySelector('.button-previous');
previousButton.addEventListener('click', function () {
    flkty.previous();
});