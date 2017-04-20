var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

if (Modernizr.geolocation) {
	navigator.geolocation.getCurrentPostition(success, fail);
	elMap.textContent = 'Checking location...';
} else {
	elMap.textContent = msg;
}

