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