var text = "We can create a simple Ticker in HTML using JavaScript "+
		"that will display a string character by character. It will simulate "+
		"like being typed using keyboard";
var intervalId = null;
var obj = document.getElementById("greeting");
var tickerText = "";
var i = 0;
intervalId= setInterval(tick, 100);

function tick() {
	tickerText += text.charAt(i);
	obj.innerHTML = tickerText+"_";
	i++;
	if (i == text.length) {
		// stops timer
		clearInterval(intervalId);
		// removes last underscore
		tickerText = tickerText.substring(0, text.length);
		obj.innerHTML = tickerText;
	}
}
