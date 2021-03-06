/*
 * HTML5 Forms Fallback for older and unsupporting browsers
 * Using jQuery, jQuery UI, Modernizr, Webforms2, and other jQuery Plugins
 * 
 * 2010 Cristian I. Colceriu
 *
 * www.ghinda.net
 * contact@ghinda.net
 *
 */
 
/* Slide
 * input[type=range] fallback
 *
 * using jQuery UI Slider
 */
var initSlider = function() {			
	$('input[type=range]').each(function() {
		var $input = $(this);
		var $slider = $('<div id="' + $input.attr('id') + '" class="' + $input.attr('class') + '"></div>');
		var step = $input.attr('step');

		$input.after($slider).hide();

		$slider.slider({
			min: $input.attr('min'),
			max: $input.attr('max'),
			step: $input.attr('step'),
			change: function(e, ui) {
				$(this).val(ui.value);
			}
		});
	});
};

if(!Modernizr.inputtypes.range){
	$(document).ready(initSlider);
};


/* Numeric Spinner
 * input[type=number] fallback
 * 
 * using jQuery Spinner plugin by Brant Burnett(http://btburnett.com/)
 */
var initSpinner = function() {			
	$('input[type=number]').each(function() {
		var $input = $(this);
		$input.spinner({
			min: $input.attr('min'),
			max: $input.attr('max'),
			step: $input.attr('step')
		});
	});
};
if(!Modernizr.inputtypes.number){		
	$(document).ready(initSpinner);
};
