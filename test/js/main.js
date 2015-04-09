$(document).ready(function() {
	$('.nav_item > a').on('click', function() {
		var link = $(this).attr('href');
			activeSection(link);
	});
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true,
			cursor: null
		}
		
	});
	// $('.image-popup-no-margins').magnificPopup({
	// 	type: 'image',
	// 	closeOnContentClick: true,
	// 	closeBtnInside: false,
	// 	fixedContentPos: true,
	// 	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	// 	image: {
	// 		verticalFit: true,
	// 		cursor: null
	// 	},
	// 	zoom: {
	// 		enabled: true,
	// 		duration: 300 // don't foget to change the duration also in CSS
	// 	}
	// });
}());

$(window).scroll(function() {
	Sections();
});
function activeSection(section) {
	var direction = section.replace(/#/, ''),
		offset = 90,
		ourSection = $('.section').filter('[data-item="' + direction + '"]'),
		scrollValue = (ourSection.offset().top) - offset;
		$('body, html').animate({
			scrollTop: scrollValue
		}, 800);
}
function Sections() {
	$('.section').each(function() {
		var $this = $(this),
			containerTop = $this.offset().top - 120,
			containerBot = containerTop + $this.height(),
			wScroll = $(window).scrollTop();

			if (containerTop < wScroll && containerBot > wScroll) {
				var currentSec = $this.data('item'),
					test = $('.nav_item').not('.active').find('a'),
					curLink = $('.nav_item > a').filter('[href="#' + currentSec + '"]');
					curLink.closest('.nav_item').addClass('active').siblings().removeClass('active');
					window.location.hash = currentSec;
			}
	});
}