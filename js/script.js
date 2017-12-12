$(document).ready(function() {
	var times = Math.floor(Math.random() * (12 - 3) + 3);
	
	var target = $('#greeting').shuffleText("Welcome to my portfolio!", {
		frames: 1000,
		maxSpeed: 1000000,
		amount: times,
		complete: null
	});
});
	
	
