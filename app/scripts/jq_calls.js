$(document).ready(function() {

	$('.draw_edit_view, .option_view').hide();

	// text 
	$('.button_show_text').click(function(){
		$('.option_view').hide();
		$('.draw_edit_view').hide();
		$('.text_edit_view').fadeIn(300);
	}); 
	
	// draw 
	$('.button_show_draw').click(function(){
		$('.text_edit_view').hide();
		$('.option_view').hide();
		$('.draw_edit_view').fadeIn(300);
	}); 
	
	// menu 
	$('.button_show_menu').click(function(){
		$('.text_edit_view').hide();
		$('.draw_edit_view').hide();
		$('.option_view').fadeIn(300);
	}); 
	
	
	
	var cws = $('.small_note').width();
	$('.small_note').css({'height':cws+'px'});
	
	var cwb = cws*2;
	$('.big_note').css({'height':cwb+'px'});
	
}); 