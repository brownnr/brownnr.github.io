$(document).ready(function() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}`~;':|\\\",./<>?";

	for (var i = 0; i < 24; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	$('#greeting').html(text);
	
	var times = Math.floor(Math.random() * (12 - 3) + 3);
	var target = $('#greeting').shuffleText("Welcome to my portfolio!", {
		frames: 20,
		maxSpeed: 1000,
		amount: times,
		complete: null
	});
});
	
	
