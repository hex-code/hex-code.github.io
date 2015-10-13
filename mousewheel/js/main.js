;$(document).ready(function(){
    var 
        step = 0,
        container = $('.maincontent'),
        pages = $('.page'),
        pagesLen = pages.length - 1,
        navList = $('.nav-icons li'),
        animate = true;
    $('body').on('mousewheel', function(event) {
        if (animate) {
            
            if (event.deltaY > 0 && step !== 0) {

                step--;
                animate = false;

            } else if(event.deltaY < 0 && step < pagesLen) {

                step++;
                animate = false;

            }
            scrollValue(step);
        }
        
        
//        container.on('transitionend', function() {
//            animate = true;
//        });
        
    });
    $('.nav-icons li').on('click', function(e){
        e.preventDefault;
        var screen = $(this).index(),
            pathName = $(location).attr('href'),
            currentPath = $(this).find('a').attr('href');
        scrollValue(screen);
        step = screen;
    });
    function scrollValue(val, pos) {
        var 
            sectionPath = $('.nav-icons').find('li').eq(val).data('item');
        pos = (-val * 100) + '%';
//        container.css('top', pos);
        container.animate({top: pos}, 100, function() {
            animate = true;
        });
        navList.eq(val).addClass('active').siblings().removeClass('active');
        window.location.hash = sectionPath;
    }
    if (window.location.hash) {
        var 
            activeLink = window.location.hash.replace('#', ''),
            currentLink = $('.nav-icons').find('li'),
            index = +currentLink.filter('[data-item="' + activeLink + '"]').index();
        scrollValue(index);
        step = index;
    }
});