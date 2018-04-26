$(document).ready(function() {

	// add telephone mask to input
	$(".input-telephone").inputmask("mask", {
		"mask": "+7-(999)-999-99-99",
		'placeholder': '+7-(___)-___-__-__'
	});

	// remove error when input change
	$('body').on('keyup', '.field-error', function(){
		$(this).removeClass('field-error')
		$(this).parents('.input-wrp').find('.error').remove()
	})

	// open/close menu
	$('body').on('click', '.header-nav i.fa-bars', function(){
		$('.header-nav').toggleClass('active')
	})

	// magnific popup
	var magnificPopupArgs = {
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: false,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
	}
	$('.thanks-popup-link, .popup-link').magnificPopup( magnificPopupArgs )

})