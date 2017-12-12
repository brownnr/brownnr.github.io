$(document).ready(function() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}`~;':|\\\",./<>?";

	for (var i = 0; i < 7; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	text += " ";
	
	for (var x = 0; x < 2; x++) {
		for (var i = 0; i < 2; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		text += " ";
	}
	
	for (var i = 0; i < 10; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	$('#greeting').html(text);
	
	var times = Math.floor(Math.random() * (12 - 3) + 3);
	var target = $('#greeting').shuffleText("Welcome to my portfolio!", {
		frames: 1000,
		maxSpeed: 1000000,
		amount: times,
		complete: null
	});
});
	
	
