(function() {
    var cols = $('.col'),
        step = 0,
        templateX = '<p>x</p>',
        templateY = '<p>o</p>';
    
    $(cols).on('click', function() {
        var $this = $(this),
            value;
        if(step % 2 == 0 && !Boolean($this.text())){   // First player
            $(".turn").html("Player 2's turn");
            value = 'x';
            $this.append(templateX).addClass(value);
            step+=1;
            app.verify(value);
        } else if (!Boolean($this.text())){
            $(".turn").html("Player 1's turn");
            value = 'o';
            $this.append(templateY).addClass(value);
            step+=1;
            app.verify(value);
        }
    });
})();