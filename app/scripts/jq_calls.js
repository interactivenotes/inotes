(function (window) {
	'use strict';

	var $ = window.jQuery,
		document = window.document;

	$(document).ready(function () {

		$('.draw_edit_view, .option_view').hide();

		// text
		$('.button_show_text').click(function () {
			$('.option_view').hide();
			$('.draw_edit_view').hide();
			$('.text_edit_view').fadeIn(300);
			$('.button_show_text').addClass('highlight');
			$('.button_show_draw').removeClass('highlight');
			$('.button_show_menu').removeClass('highlight');
		});

		// draw
		$('.button_show_draw').click(function () {
			$('.text_edit_view').hide();
			$('.option_view').hide();
			$('.draw_edit_view').fadeIn(300);
			$('.button_show_draw').addClass('highlight');
			$('.button_show_menu').removeClass('highlight');
			$('.button_show_text').removeClass('highlight');
		});

		// menu
		$('.button_show_menu').click(function () {
			$('.text_edit_view').hide();
			$('.draw_edit_view').hide();
			$('.option_view').fadeIn(300);
			$('.button_show_menu').addClass('highlight');
			$('.button_show_draw').removeClass('highlight');
			$('.button_show_text').removeClass('highlight');
		});

		var cws = $('.small_note').width(),
			cwb;
		$('.small_note').css({'height': cws + 'px'});

		cwb = cws * 2;
		$('.big_note').css({'height': cwb + 'px'});

	});

}(this));

