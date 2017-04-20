var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

// CHECK IF GEOLOCATION IS SUPPORTED AND ASK FOR LOCATION
if (Modernizr.geolocation) {
	navigator.geolocation.getCurrentPostition(success, fail);
	elMap.textContent = 'Checking location...';
} else {
	elMap.textContent = msg;
}

// CREATE SUCCESS MESSAGE
function success(position) {
	msg = '<h3>Longitude:<br>';
	msg += position.coords.longitude + '</h3>';
	msg += '<h3>Latitude:<br>';
	msg += position.coords.latitude + '</h3>';
	elMap.innerHTML = msg;
}