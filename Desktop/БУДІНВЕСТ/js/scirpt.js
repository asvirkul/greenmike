jQuery(window).load( function() {

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.8s',
        filter: '.possibilities' 
    });
    
    $('.buttons-wrapper button').on('click', function() {
        var value = $(this).attr('data-filter');
        $grid.isotope({
            filter: value
        });
    });
    
    $('.buttons-wrapper button').click(function() {
        $('.buttons-wrapper button').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.buttons-wrapper button').click(function(){
        $('.buttons-wrapper button').removeClass('active');
        $(this).addClass('active');
    });

});//ready