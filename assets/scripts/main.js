$(document).ready(function () {
    $('body').mousemove(function (e) {
        var amountMovedX = (e.pageX/2 * -1 / 5);
        var amountMovedY = (e.pageY/2 * -1 / 5);
        if(amountMovedY >= -250) {
            $('.hero-section-overlay').css({'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0px)'});
        }
    });

    $('.promo-carousel').owlCarousel({
        items: 1,
        dots: true
    });

    // ===== Scroll to Top ====
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 350) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });

    var selectNavigation = $('.select-navigation');
    var distance = selectNavigation.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
            selectNavigation.addClass('fixed-top');
            $('body').addClass('padding-top');
        }
        else {
            selectNavigation.removeClass('fixed-top');
            $('body').removeClass('padding-top');
        }
    });

    $('#select-nav').change(function(){
        var value = $(this).val();
        $('html, body').animate({
            scrollTop: $( '#' + $(this).val() ).offset().top
        }, 500);
        return false;
    });
});