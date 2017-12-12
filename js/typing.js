var text = "We can create a simple Ticker in HTML using JavaScript " +
		"that will display a string character by character. It will simulate " +
		"as if text being typed using a keyboard.";
var intervalId = null;
var obj = document.getElementById("greeting");
var tickerText = "";
var i = 0;
intervalId = setInterval(tick, 170);

function tick() {
	tickerText += text.charAt(i);
	obj.innerHTML = tickerText + "_";
	if (text.charAt(i) == ".") {
		var blinks = Math.random() * (10 - 3) + 3;
		
		setTimeout(function () {
			for (var x = 0; x < blinks; x++) {
				if (x % 2 == 1) 
					obj.innerHTML = tickerText + "_";
				else
					obj.innerHTML = tickerText;
			}
		}, 100);
	}
		
	i++;
	if (i == text.length) {
		// stops timer
		clearInterval(intervalId);
		// removes last underscore
		tickerText = tickerText.substring(0, text.length);
		obj.innerHTML = tickerText;
	}
}
