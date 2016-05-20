var k = "oqMr94lOnVSduMmQu0BIm0cZM5vjsw2ClfDmevFY";

document.addEventListener('DOMContentLoaded', getStations);

function getStations(){
  //add listener for click to submit data
  document.getElementById("submit").addEventListener('click', function(event){
	  //stuff for alt. fuel stations
	  var fReq = new XMLHttpRequest();
	  var loc = document.getElementById("location").value;
	  var rad = document.getElementById("radius").value;
		
	  fReq.open("GET", "https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=" + k + "&location=" + loc + "&radius=" + rad + "&status=E&access=public&limit=2", true);
	  fReq.addEventListener('load', function(){
		
		  if(fReq.status >= 200 && fReq.status < 400){
			var fRes = JSON.parse(fReq.responseText);
			var stations = fRes.fuel_stations;
			var fuelForm = document.getElementById("altFuel");
			var max;
			
			if(stations.length - 1 < 10){
			  max = stations.length - 1;
			} else {
			  max = 10;
			}
			
			for(x = 0; x < max; x++){
			  var station = fRes.fuel_stations[x];
			  var p = document.createElement("p");
					
			  p.innerHTML = "&lt;b&gt" + station.station_name + "&lt;/b&gt&lt;br&gt" + station.street_address
				+ "&lt;br&gt" + station.city + ", " + station.state + " " + station.zip + "&lt;br&gt" + 
				station.station_phone + "&lt;br&gt";

			  fuelForm.appendChild(p);
			}
		  } else {
			var head = document.createElement("h2");
			var p = document.createElement("p");
			
			head.innerHTML = "Error in the network request:"
			p.innerHTML = fReq.statusText;
			
			document.body.appendChild(head);
			document.body.appendChild(p);
		  }
	  });
		
	  fReq.send(null);
	  
	  
	  
	  
	  
	  var reveal = document.getElementsByClassName("col-md-5");
	  for(var x = 0; x < reveal.length; x++){
		  reveal[x].style.visibility = "visible";
	  }
	  event.preventDefault();
	}
}