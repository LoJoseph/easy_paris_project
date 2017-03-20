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
			strokeOpacity: 0.1,
			zoom: 11
			});

		mapFoxity.fitBounds(circle.getBounds());

		var marqueur = new google.maps.Marker ({
							position: new google.maps.LatLng(48.8283575, 2.3794178),
							map: mapFoxity
						});

		$(document).ready(function() {

			function afficherLigneOt() {
				$.ajax({
					url: 'js/json/open_tour.json',
					success: function(data) {
						for (var i = 0; i < data.length; i++) {
							console.log(data[i]);

							var ligneOt = [
								new google.maps.LatLng(48.872676, 2.328758), //Auber
								new google.maps.LatLng(48.869860, 2.332608), // 4 septembre
								new google.maps.LatLng(48.864135, 2.335109), //Palais Royal - Comédie Française
								new google.maps.LatLng(48.861337, 2.334531), //Musée du Louvre
								new google.maps.LatLng(48.856563, 2.341384), //Pont-neuf - Quai des orfèvres
								new google.maps.LatLng(48.853876, 2.347259), // Notre Dame
								new google.maps.LatLng(48.853562, 2.345000), //Saint-Michel
								new google.maps.LatLng(48.861202, 2.323809), // Musée d'Orsay
								new google.maps.LatLng(48.865597, 2.320753), //Concorde
								new google.maps.LatLng(48.867826, 2.313849), //Champs-Elysées Clemenceau
								new google.maps.LatLng(48.870507, 2.305390), //La Boétie-Champs-Elysées
								new google.maps.LatLng(48.872057, 2.300590), //Georges V
								new google.maps.LatLng(48.871879, 2.293616), //Charles de Gaulle-Etoile
								new google.maps.LatLng(48.864085, 2.287827), //Trocadéro
								new google.maps.LatLng(48.863792, 2.290629),
								new google.maps.LatLng(48.862818, 2.291777),
								new google.maps.LatLng(48.860275, 2.291428),
								new google.maps.LatLng(48.858934, 2.293416),
								new google.maps.LatLng(48.860847, 2.296071),
								new google.maps.LatLng(48.861525, 2.297455),
								new google.maps.LatLng(48.861973, 2.298962),
								new google.maps.LatLng(48.861973, 2.298962),
								new google.maps.LatLng(48.862276, 2.301534),
								new google.maps.LatLng(48.858848, 2.300526),
								new google.maps.LatLng(48.857764, 2.300161),
								new google.maps.LatLng(48.856599, 2.298407),
								new google.maps.LatLng(48.856264, 2.297656),
								new google.maps.LatLng(48.855752, 2.297136),
								new google.maps.LatLng(48.854651, 2.295468),
								new google.maps.LatLng(48.855599, 2.294065),
								new google.maps.LatLng(48.856405, 2.292743),
								new google.maps.LatLng(48.857451, 2.291115),
								new google.maps.LatLng(48.857709, 2.291547), //Tour Eiffel - quai Branly
								new google.maps.LatLng(48.860557, 2.295597),
								new google.maps.LatLng(48.859828, 2.296729),
								new google.maps.LatLng(48.858568, 2.298703),
								new google.maps.LatLng(48.854290, 2.305469),
								new google.maps.LatLng(48.854124, 2.306189),
								new google.maps.LatLng(48.854045, 2.306393),
								new google.maps.LatLng(48.854089, 2.306543),
								new google.maps.LatLng(48.853934, 2.310212),
								new google.maps.LatLng(48.853729, 2.314267), // 16 
								new google.maps.LatLng(48.853858, 2.311454),
								new google.maps.LatLng(48.853563, 2.311524),
								new google.maps.LatLng(48.853297, 2.311832),
								new google.maps.LatLng(48.853177, 2.312328),
								new google.maps.LatLng(48.853214, 2.312728),
								new google.maps.LatLng(48.853470, 2.313197),
								new google.maps.LatLng(48.853765, 2.313366),
								new google.maps.LatLng(48.853709, 2.314731),
								new google.maps.LatLng(48.854921, 2.314862),
								new google.maps.LatLng(48.857385, 2.315179),
								new google.maps.LatLng(48.857996, 2.315233),
								new google.maps.LatLng(48.858051, 2.314731),
								new google.maps.LatLng(48.858295, 2.314302),
								new google.maps.LatLng(48.858394, 2.313747), // 17
								new google.maps.LatLng(48.858396, 2.313471),
								new google.maps.LatLng(48.858830, 2.312994),
								new google.maps.LatLng(48.862754, 2.313447),
								new google.maps.LatLng(48.862754, 2.313447),
								new google.maps.LatLng(48.864691, 2.313660),
								new google.maps.LatLng(48.867530, 2.314019),
								new google.maps.LatLng(48.867756, 2.313987),
								new google.maps.LatLng(48.865632, 2.320778),
								new google.maps.LatLng(48.864993, 2.320317),
								new google.maps.LatLng(48.864806, 2.320446),
								new google.maps.LatLng(48.864697, 2.320875),
								new google.maps.LatLng(48.864859, 2.321175),
								new google.maps.LatLng(48.866080, 2.321990),
								new google.maps.LatLng(48.866299, 2.321754),
								new google.maps.LatLng(48.867349, 2.322516) // 18
								// new google.maps.LatLng(),
								// new google.maps.LatLng(),
								// new google.maps.LatLng(),
								// new google.maps.LatLng(),
								// new google.maps.LatLng(),
							];

							var parcoursOt = new google.maps.Polyline({
								path: ligneOt,
								map: mapOpenTour,
								strokeColor: "#1ec1c1",
								strokeOpacity: 1.0,
								strokeWeight: 3
							});

							var stopMarker = new google.maps.Marker({
								position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
								map: mapOpenTour,
								title: data[i].station
							});
						}
					}
				});
			};
			
			$('#openLine').on('click', function() {
				afficherLigneOt();
			});
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
