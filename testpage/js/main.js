$(document).ready(function() {
    var value = [0, 290, 580, 870, 1160, 1450, 1740, 2030, 2320, 2620],
        len = value.length,
        body = $('body'),
        $coin = $('.coin img');
    function animateCoin() {
        for(var i = 0; i <= len; i++) {
            $coin.animate({'marginLeft': -value[i] + 'px'}, 11).delay(15);
            if (i === len - 1) {
                for (var j = 9; j > -1; j--) {
                    $coin.animate({'marginLeft': -value[j] + 'px'}, 1).delay(15);
                }
            }
        }
    }
    $('.coin > img').on('mouseenter', function() {
        $(this).stop(true);
        animateCoin();
    });
    var interval_id = setInterval(animateCoin, 4000);
    setInterval(function() {
        $('body').addClass('hover-button');
        setTimeout(function() {
           $('body').removeClass('hover-button'); 
        }, 700);
    }, 3000);
    var scene = document.getElementById('slider');
    var parallax = new Parallax(scene);
});