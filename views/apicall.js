$(document).ready(function() {
	var lon;
	var lat;
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lon = position.coords.longitude;
			lat = position.coords.latitude;
			$("#data").html("latitude: " + lat + "<br>Longitude: " + lon);
		})
	}
	var api = "http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22";
	$.getJSON(api, function(data) {
		
	})
});