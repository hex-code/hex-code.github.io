var slider = (function () {
	//private scope
	var duration = 500;

	return {

		init: function () {
			var that = this;
			that.makeDots();
			$('.control').on('click', function (e) {
				e.preventDefault();
				var $this = $(this),
				slides = $this.closest('.slider').find('.slider-list li'),
				activeSlide = slides.filter('.active'),
				nextSlide = activeSlide.next(),
				prevSlide = activeSlide.prev(),
				firsSlide = slides.first(),
				lastSlide = slides.last();
				if ($this.hasClass('next')) {
					if (nextSlide.length) {
						that.moveSlide(nextSlide, 'next');
					} else {
						that.moveSlide(firsSlide, 'next');
					}
				} else {
					if (prevSlide.length) {
						that.moveSlide(prevSlide, 'prev');
					} else {
						that.moveSlide(lastSlide, 'prev');
					}
				}
			});

			$('.dots-item').on('click', function (e) {
				e.preventDefault();

				var $this = $(this),
				dots = $this.closest('.dots-list').find('.dots-item'),
				activeDot = dots.filter('.current'),
				dot = $this.closest('.dots-item'),
				curDotNum = dot.index(),
				direction = activeDot.index() < curDotNum ? "next" : "prev";
				reqSlide = $this.closest('.slider').find('.slider-list li').eq(curDotNum);
				if (dot.hasClass('current')) {return;}
				that.moveSlide(reqSlide, direction);
			});
		},

		moveSlide: function (slide, direction) {
			var that = this,
			container = slide.closest('.slider'),
			slides = container.find('li'),
			slideWidth = slides.width(),
			activeSlide = slides.filter('.active'),
			reqPos = 0,
			reqStrafe = 0;
			if (direction === 'next') {
				reqPos = slideWidth;
				reqStrafe = -slideWidth;
			} else if (direction === 'prev') {
				reqPos = -slideWidth;
				reqStrafe = slideWidth;
			}
			slide.css('left', reqPos).addClass('inslide');
			var movableSlide = slides.filter('.inslide');
			activeSlide.animate({left: reqStrafe}, duration);
			movableSlide.animate({left: 0}, duration, function () {
				var $this = $(this);
				slides.css('left', '0').removeClass('active');
				$this.toggleClass('inslide active');
				that.setActiveDot(container.find('.dots-list'));
			});
		},
		makeDots: function () {
			var that = this,
			container = $('.slider'),
			slidesLen = container.find('.slider-list li').length,
			dotMarkup = '<li class="dots-item"></li>';
			container.each(function () {
				var $this = $(this),
				slides = $this.find('.slider-list li'),
				dotsContainer = $this.find('.dots-list');

				while (slidesLen--) {
				dotsContainer.append(dotMarkup);
				};
				that.setActiveDot(dotsContainer);
			});
		},

		setActiveDot: function (container) {
			var slides = container.closest('.slider-wrapper').find('.slider-list > li');
			console.log();

			container
				.find('.dots-item')
				.eq(slides.filter('.active').index())
				.addClass('current')
				.siblings()
				.removeClass('current');
		}
	}
}());

$(document).ready(function () {
		slider.init();
}());