$(document).ready(function(){
	$('.b-1-slider').slick({
		arrows: false,
		autoplay: true
	});

	$('.b-2 .filter li a').click(function(){
		var el = $(this).attr('href');
		var et = this;

		$(this).parents('.filter').find('li').removeClass('active');
		$(this).parents('li').addClass('active');
		$(this).parents('.container').find('.shop').animate({opacity: 0},300);
		setTimeout(function(){
			$(et).parents('.container').find('.shop').removeClass('active');
			$(et).parents('.container').find(el).addClass('active');
			$(et).parents('.container').find('.shop').animate({opacity: 1},300);
		},300);
		return false;
	});

	$('.brand-slider').slick({
		arrows: false,
		fade: true,
		dots: true,
		autoplay: true
	});
});