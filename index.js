$(function() {
	// scroll reveal
	window.sr = ScrollReveal({ reset: false });
	sr.reveal('.parallax', { duration: 2500, origin: 'bottom', scale: 1, distance: '5px', easing: 'cubic-bezier(0.46, 0, 0.07, 1)' });

	sr.reveal('.content-wrap', { duration: 2500, origin: 'bottom', scale: 1, distance: '5px', easing: 'cubic-bezier(0.46, 0, 0.07, 1)', reset: true });

		// interactive ripples
	$('.parallax').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 1,
	});
		// Automatic drops
	setInterval(function() {
		var $el = $('.parallax');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);

	$('.parallax').ripples("play");

});