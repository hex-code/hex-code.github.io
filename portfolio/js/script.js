$(document).ready(function(){
	var el = $('.img-responsive'),
		animateTime = 800,
		moreWorks = $('.additional-info'),
		skype = $('.skype'),
		info = $('.info'),
		scene = $('.modalDiv'),
		arrowUp = $('.scroll');
		window.onscroll = function () {
			if ($(window).width() < 950) {
				return;
			}
			var scroll = window.pageYOffset;
			if (scroll > 700) {
				$(arrowUp).fadeIn(animateTime);
			} else if (scroll < 700) {
				$(arrowUp).fadeOut(animateTime);
			}
		};
		$(arrowUp).on('click', function () {
			$('body, html').animate({scrollTop: 0}, animateTime);
		});
		$(el).on('click', function(){
			var this_ = $(this),
			desc = $(this_).siblings('p').clone(),
			title = $(this_).siblings('h3').clone()
			width = window.innerWidth/2,
			height = window.innerHeight/2,
			scroll = window.scrollY,
			img = "url" + "(" + $(this_).attr('src') + ")" + " top" + " center",
			sceneHeight = scene.height(),
			sceneWidth = scene.width();
			if ($(window).width() < 768) {
				return;
			}
			scene.css({
				"top": (height - sceneHeight/2) + scroll,
				"left": width - sceneWidth/2,
				"background": img
			});
			$('').fadeOut();
			scene.stop().show(animateTime);
			$(title).appendTo(info);
			$(desc).appendTo(info);
		});

		$(scene).on('click', function(){
			scene.hide(animateTime);
			scene.css("background", "");
			$(info).empty();
		});
		$('.show-info').on('click', function(){
			$(skype).is(':hidden')? $(skype).slideDown() : $(skype).slideUp();
		});

		$('#more').on('click', function(){
			$(moreWorks).is(':hidden')? $(moreWorks).show(animateTime): $(moreWorks).hide(animateTime);
		});
});