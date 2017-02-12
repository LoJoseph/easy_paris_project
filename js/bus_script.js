function initMap() {
	// var map = new google.maps.Map(document.getElementById('map'), {
	//     center: {lat: 48.8582171, lng: 2.3307914},
	//     zoom: 11
	// });

	var mapFoxity = new google.maps.Map(document.getElementById('map_foxity'), {
	    center: {lat: 48.8582171, lng: 2.3307914},
	    zoom: 11
	});

	var mapBigbus = new google.maps.Map(document.getElementById('map_bigbus'), {
	    center: {lat: 48.8582171, lng: 2.3307914},
	    zoom: 11
	});

	var mapOpenTour = new google.maps.Map(document.getElementById('map_openTour'), {
	    center: {lat: 48.8582171, lng: 2.3307914},
	    zoom: 11
	});

	var infoWindow = new google.maps.InfoWindow({map: mapFoxity});

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {
	 	var myPosition = {
	    lat: position.coords.latitude,
	    lng: position.coords.longitude
	  	};

	  	infoWindow.setPosition(myPosition);
	  	infoWindow.setContent('Vous êtes ici!');
	  	mapFoxity.setCenter(myPosition);

		// Draw a circle around the user position to have an idea of the current localization accuracy
	  	var circle = new google.maps.Circle({
			center: myPosition,
			radius: position.coords.accuracy,
			map: mapFoxity,
			fillColor: '#0000FF',
			fillOpacity: 0.1,
			strokeColor: '#0000FF',
			strokeOpacity: 0.1
			});

		mapFoxity.fitBounds(circle.getBounds());

		var marqueur = new google.maps.Marker ({
							position: new google.maps.LatLng(48.8283575, 2.3794178),
							map: mapFoxity
						});

	},

	function() {
		handleLocationError(true, infoWindow, map.getCenter());
	});

	} else {
	// Browser doesn't support Geolocation
	handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	  infoWindow.setPosition(pos);
	  infoWindow.setContent(browserHasGeolocation ?
	                        'Error: The Geolocation service failed.' :
	                        'Error: Your browser doesn\'t support geolocation.');
}

// Animations
