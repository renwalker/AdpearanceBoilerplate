!function ($) {

	/* Accordian collapser */
	$('.toggle_wrap .togglee').each(function() {
		if (!$(this).hasClass('default-open')) {
			$(this).hide();
		}
	});

	$(".toggler").click(function() {
		if ($(this).parents('.toggle_wrap').length >= 1) {
			var accordian = $(this).parents('.toggle_wrap');
			if ($(this).hasClass('active')) {
				$(accordian).find('.toggler').removeClass('active');
				$(accordian).find(".togglee").slideUp();
			} else {
				$(accordian).find('.toggler').removeClass('active');
				$(accordian).find(".togglee").slideUp();
				$(this).addClass('active');
				$(this).next(".togglee").slideToggle();
			}
		} else {
			if ($(this).hasClass('active')) {
				$(this).removeClass("active");
			} else {
				$(this).addClass("active");
			}
		}
		return false;
	});

	$(".toggler").click(function() {
		if (!$(this).parents('.toggle_wrap').length >= 1) {
			$(this).next(".togglee").slideToggle();
		}
	});

	/* Media Lightbox */
	$('.fancybox').fancybox({
		wrapCSS    : 'fancybox_custom',
		helpers : {
				title : {
					type : 'over'
				}
			}
	});

	$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
		wrapCSS    : 'fancybox_custom',
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',
		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});

}(jQuery);

