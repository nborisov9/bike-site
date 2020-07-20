//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js
//@prepros-append slick.min.js

function ibg() {

	var ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


//СКРИПТ ДЛЯ МЕНЮ БУРГЕР!!!!
$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});


//SLIDER SLICK=============================================================

$(document).ready(function () {
	$('.slider__body').slick({
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>'




	});
});


//SLIDER SLICK=============================================================