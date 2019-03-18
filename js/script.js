var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    hash: true,
});

var nextButton = document.querySelector('.button-next');
nextButton.addEventListener('click', function () {
    flkty.next();
});

var previousButton = document.querySelector('.button-previous');
previousButton.addEventListener('click', function () {
    flkty.previous();
});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});


// mustache :
/************* MUSTACHE pętla *****************/
var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
//Mustache.parse(templateItem);

for(var i = 0; i < carouselData.length; i++){
		//console.log(carouselData[i]);
		listItems += Mustache.render(templateItem, carouselData[i]);
	};

//var fullList = Mustache.render(listItems);

results.insertAdjacentHTML('beforeend', listItems);

