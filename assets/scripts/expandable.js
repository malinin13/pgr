var expandableHeight = 200;
var expandableToggle = $('.expandable-toggle');

expandableToggle.click(function () {
    if ($(this).prev().height() == expandableHeight) {
        autoHeightAnimate($(this).prev(), 200);
        $(this).find('span').html('READ LESS');
    } else {
        $(this).prev().stop().animate({height: expandableHeight}, 200);
        $(this).find('span').html('READ MORE');
    }
});