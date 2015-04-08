$(document).ready(function() {
	$('.nav_item > a').on('click', function() {
		var link = $(this).attr('href');
			activeSection(link);
	});
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