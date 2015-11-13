$(document).ready(function () {
    $('body').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 6);
        var amountMovedY = (e.pageY * -1 / 6);
        $('.hero-section-overlay').css({'transform': 'translate3d(' + amountMovedX +'px,' + amountMovedY + 'px, 0px)'})
    });
});