$(document).ready(function() {
	var times = Math.floor(Math.random() * (12 - 3) + 3);
	
	var target = $('#greeting').shuffleText("Hello", {
		frames: 1000,
		amount: times,
		complete: null
	});
});
	
	
