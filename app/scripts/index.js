(function($) {
    'use strict';

    $(function() {
        $('#myCarousel').carousel();
    });
})(window.jQuery);

$(function(){
	$('.curtains').curtain({
		scrollSpeed: 300,
		curtainLinks: '.curtain-links',
		nextSlide: function(){
		console.log("ok");
		}
	});
});