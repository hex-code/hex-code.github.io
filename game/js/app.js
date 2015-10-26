var app = (function() {
	var cols = $('.col');
	
	function verify(value){
       checkRows(value);
       checkColumns(value);
       checkDiagonals(value);
    };
    
    function checkRows(value) { //rows
        if ( $(cols[0]).hasClass(value) && $(cols[1]).hasClass(value) && $(cols[2]).hasClass(value) ) {
            victory(value);
        } else if( $(cols[3]).hasClass(value) && $(cols[4]).hasClass(value) && $(cols[5]).hasClass(value) ) {
            victory(value);
        } else if( $(cols[6]).hasClass(value) && $(cols[7]).hasClass(value) && $(cols[8]).hasClass(value) ) {
            victory(value);
        }
    }
    
    function checkColumns(value) { //columns
        if ( $(cols[0]).hasClass(value) && $(cols[3]).hasClass(value) && $(cols[6]).hasClass(value) ) {
            victory(value);
        } else if( $(cols[1]).hasClass(value) && $(cols[4]).hasClass(value) && $(cols[7]).hasClass(value) ) {
            victory(value);
        } else if( $(cols[2]).hasClass(value) && $(cols[5]).hasClass(value) && $(cols[8]).hasClass(value) ) {
            victory(value);
        }
    }
    
    function checkDiagonals(value) { //diagonals
        if ( $(cols[0]).hasClass(value) && $(cols[4]).hasClass(value) && $(cols[8]).hasClass(value) ) {
            victory(value);
        } else if( $(cols[2]).hasClass(value) && $(cols[4]).hasClass(value) && $(cols[6]).hasClass(value) ) {
            victory(value);
        }
    }
    
    function victory(value){
        value === 'x' ? alert("Player 1 wins!") : alert("Player 2 wins!");
        // $(".turn").html("Player 1's turn");
        $(".col").each(function() {
            var $this = $(this);
            $this.removeClass("x o");
            $($this).children().remove();
        });
    };
    return {
    	verify: verify
    }
})();