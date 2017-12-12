$(document).ready(function() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}`~;':|\\\",./<>?";

	for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	var times = Math.floor(Math.random() * (12 - 3) + 3);
	var target = $('blockquote').shuffleText(text, {
		frames: 60,
		maxSpeed: 1500,
		amount: times,
		complete: null
	});
});
	
	
