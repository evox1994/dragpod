$(document).ready(function(){

	$(document).on('click',function(e){
		var container = $('.b-cat-info');

		if ( !$(e.target).closest(container).length ){
			container.removeClass('active');
		}
	});

	$(document).on('click','.b-cat-info-text',function(){
		$(this).parents('.b-cat-info').toggleClass('active');
	});

});