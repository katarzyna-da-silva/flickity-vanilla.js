"use strict";

(function() {
// for carousel :
var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    hash: true,
});
//buttons reset :
 var resetButton = document.querySelector('#reset');
 resetButton.addEventListener('click', function(){
     flkty.select(0);
 })
//buttons :
var nextButton = document.querySelector('.button-next');
nextButton.addEventListener('click', function () {
    flkty.next();
});

var previousButton = document.querySelector('.button-previous');
previousButton.addEventListener('click', function () {
    flkty.previous();
});

//progress :
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});
})();

