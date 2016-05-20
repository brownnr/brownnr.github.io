var k = "oqMr94lOnVSduMmQu0BIm0cZM5vjsw2ClfDmevFY";

document.addEventListener('DOMContentLoaded', getStations);

function getStations(){
  //add listener for click to submit data
  document.getElementById("submit").addEventListener('click', function(event){
	  var req = new XMLHttpRequest();
	  var loc = document.getElementById("location").value;
	  var rad = document.getElementById("radius").value;
		
	  req.open("GET", "https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?
		api_key=" + k + "&location=" + loc + "&radius=" + rad + "&status=E&access=
		public&limit=2", true);
	  req.addEventListener('load', function(){
		
		  if(req.status >= 200 && req.status < 400){
			var res = JSON.parse(req.responseText);
			var stations = res.fuel_stations;
			var max;
			
			if(stations.length - 1 < 10){
			  max = stations.length - 1;
			} else {
			  max = 10;
			}
			
			for(x = 0; x < max; x++){
			  var station = res.fuel_stations[x];
			  var p = document.createElement("p");
					
			  p.innerHTML = "&lt;b&gt" + station.station_name + "&lt;/b&gt&lt;br&gt" + station.street_address
				+ "&lt;br&gt" + station.city + ", " + station.state + " " + station.zip + "&lt;br&gt" + 
				station.station_phone + "&lt;br&gt";

			  document.body.appendChild(p);
			}
		  } else {
			var head = document.createElement("h2");
			var p = document.createElement("p");
			
			head.innerHTML = "Error in the network request:"
			p.innerHTML = req.statusText;
			
			document.body.appendChild(head);
			document.body.appendChild(p);
		  }
	  });
		
	  req.send(null);
	  
	  
	  
	  
	  
	  
	  event.preventDefault();
	}
}