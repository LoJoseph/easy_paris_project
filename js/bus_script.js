function initMap() {

	var mapOpenTour = new google.maps.Map(document.getElementById('map_openTour'), {
	    center: {lat: 48.8582171, lng: 2.3307914},
	    zoom: 13
	});

	var mapFoxity = new google.maps.Map(document.getElementById('map_foxity'), {
	    center: {lat: 48.8582171, lng: 2.3307914},
	    zoom: 16
	});

	var mapBigbus = new google.maps.Map(document.getElementById('map_bigbus'), {
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
								new google.maps.LatLng(48.872747, 2.328828),
								new google.maps.LatLng(48.871835, 2.330561),
								new google.maps.LatLng(48.871579, 2.330947),
								new google.maps.LatLng(48.871103, 2.331856),
								new google.maps.LatLng(48.870604, 2.332073),
								new google.maps.LatLng(48.870604, 2.332073),
								new google.maps.LatLng(48.869860, 2.332608), // 4 septembre
								new google.maps.LatLng(48.864135, 2.335109), //Palais Royal - Comédie Française
								new google.maps.LatLng(48.863246, 2.335506),
								new google.maps.LatLng(48.863183, 2.335482),
								new google.maps.LatLng(48.862678, 2.335187),
								new google.maps.LatLng(48.862207, 2.334683),
								new google.maps.LatLng(48.861828, 2.334179), //Musée du Louvre
								new google.maps.LatLng(48.861720, 2.333857),
								new google.maps.LatLng(48.861566, 2.333699),
								new google.maps.LatLng(48.861372, 2.333680),
								new google.maps.LatLng(48.861222, 2.333795),
								new google.maps.LatLng(48.861128, 2.333811),
								new google.maps.LatLng(48.860992, 2.333744),
								new google.maps.LatLng(48.860175, 2.333250),
								new google.maps.LatLng(48.860127, 2.333317),
								new google.maps.LatLng(48.859382, 2.336584),
								new google.maps.LatLng(48.859112, 2.339062),
								new google.maps.LatLng(48.858720, 2.341438),
								new google.maps.LatLng(48.858545, 2.342452),
								new google.maps.LatLng(48.858243, 2.342240),
								new google.maps.LatLng(48.858243, 2.342240),
								new google.maps.LatLng(48.857181, 2.341382),
								new google.maps.LatLng(48.857181, 2.341382),
								new google.maps.LatLng(48.856936, 2.341157),
								new google.maps.LatLng(48.856936, 2.341157), //Pont-neuf - Quai des orfèvres
								new google.maps.LatLng(48.856624, 2.341557),
								new google.maps.LatLng(48.855655, 2.342662),
								new google.maps.LatLng(48.855007, 2.343434),
								new google.maps.LatLng(48.854361, 2.344917),
								new google.maps.LatLng(48.855438, 2.345947),
								new google.maps.LatLng(48.857125, 2.347095),
								new google.maps.LatLng(48.857189, 2.347390),
								new google.maps.LatLng(48.856748, 2.348930),
								new google.maps.LatLng(48.855781, 2.348415),
								new google.maps.LatLng(48.855781, 2.348415),
								new google.maps.LatLng(48.853876, 2.347259), // Notre Dame
								new google.maps.LatLng(48.853084, 2.346797),
								new google.maps.LatLng(48.853562, 2.345000), //Saint-Michel
								new google.maps.LatLng(48.853836, 2.344158),
								new google.maps.LatLng(48.854747, 2.342275),
								new google.maps.LatLng(48.857352, 2.338295),
								new google.maps.LatLng(48.857541, 2.337919),
								new google.maps.LatLng(48.857889, 2.336216),
								new google.maps.LatLng(48.857843, 2.335326),
								new google.maps.LatLng(48.858902, 2.331308),
								new google.maps.LatLng(48.859827, 2.328497),
								new google.maps.LatLng(48.861202, 2.323809), // Musée d'Orsay
								new google.maps.LatLng(48.861500, 2.322961),
								new google.maps.LatLng(48.862679, 2.319066),
								new google.maps.LatLng(48.864733, 2.320536),
								new google.maps.LatLng(48.864740, 2.321019),
								new google.maps.LatLng(48.865947, 2.321952),
								new google.maps.LatLng(48.866039, 2.321990),
								new google.maps.LatLng(48.866099, 2.321982),
								new google.maps.LatLng(48.866099, 2.321982),
								new google.maps.LatLng(48.866210, 2.321908),
								new google.maps.LatLng(48.866307, 2.321684),
								new google.maps.LatLng(48.866342, 2.321512),
								new google.maps.LatLng(48.866328, 2.321362),
								new google.maps.LatLng(48.866286, 2.321233),
								new google.maps.LatLng(48.866236, 2.321180),
								new google.maps.LatLng(48.865597, 2.320753), //Concorde
								new google.maps.LatLng(48.867826, 2.313849), //Champs-Elysées Clemenceau
								new google.maps.LatLng(48.870507, 2.305390), //La Boétie-Champs-Elysées
								new google.maps.LatLng(48.872057, 2.300590), //Georges V
								new google.maps.LatLng(48.872990, 2.297640),
								new google.maps.LatLng(48.873593, 2.295779),
								new google.maps.LatLng(48.873778, 2.295851),
								new google.maps.LatLng(48.873919, 2.295838),
								new google.maps.LatLng(48.874072, 2.295717),
								new google.maps.LatLng(48.874215, 2.295519),
								new google.maps.LatLng(48.874277, 2.295350),
								new google.maps.LatLng(48.874307, 2.295109),
								new google.maps.LatLng(48.874305, 2.294921),
								new google.maps.LatLng(48.874229, 2.294653),
								new google.maps.LatLng(48.874116, 2.294460),
								new google.maps.LatLng(48.873968, 2.294334),
								new google.maps.LatLng(48.873862, 2.294310),
								new google.maps.LatLng(48.873680, 2.294310),
								new google.maps.LatLng(48.873532, 2.294417),
								new google.maps.LatLng(48.873454, 2.294500),
								new google.maps.LatLng(48.873396, 2.294621),
								new google.maps.LatLng(48.873334, 2.294707),
								new google.maps.LatLng(48.873211, 2.294608),
								new google.maps.LatLng(48.871879, 2.293616), //Charles de Gaulle-Etoile
								new google.maps.LatLng(48.864085, 2.287827), //Trocadéro
								new google.maps.LatLng(48.863778, 2.287604),
								new google.maps.LatLng(48.863703, 2.287589),
								new google.maps.LatLng(48.863639, 2.287683),
								new google.maps.LatLng(48.863436, 2.287517),
								new google.maps.LatLng(48.863461, 2.287211),
								new google.maps.LatLng(48.863426, 2.286980),
								new google.maps.LatLng(48.863292, 2.286631),
								new google.maps.LatLng(48.863179, 2.286540),
								new google.maps.LatLng(48.863045, 2.286460),
								new google.maps.LatLng(48.862872, 2.286487),
								new google.maps.LatLng(48.862681, 2.286664),
								new google.maps.LatLng(48.862547, 2.286932),
								new google.maps.LatLng(48.862515, 2.287216),
								new google.maps.LatLng(48.862970, 2.287913),
								new google.maps.LatLng(48.863217, 2.288455),
								new google.maps.LatLng(48.863792, 2.290629), // rep av du pres wilson
								new google.maps.LatLng(48.863594, 2.290924),
								new google.maps.LatLng(48.863223, 2.291487),
								new google.maps.LatLng(48.862994, 2.291718),
								new google.maps.LatLng(48.862818, 2.291777),
								new google.maps.LatLng(48.862776, 2.291857),
								new google.maps.LatLng(48.862472, 2.291830),
								new google.maps.LatLng(48.862345, 2.291830),
								new google.maps.LatLng(48.861120, 2.291390),
								new google.maps.LatLng(48.860608, 2.290891),
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
								new google.maps.LatLng(48.867349, 2.322516), // 18
								new google.maps.LatLng(48.869336, 2.323943),
								new google.maps.LatLng(48.869322, 2.324423),
								new google.maps.LatLng(48.870208, 2.325075),
								new google.maps.LatLng(48.870570, 2.325367),
								new google.maps.LatLng(48.870681, 2.325512),
								new google.maps.LatLng(48.870840, 2.325067),
								new google.maps.LatLng(48.872705, 2.326459),
								new google.maps.LatLng(48.873368, 2.326888),
								new google.maps.LatLng(48.873768, 2.327172),
								new google.maps.LatLng(48.873593, 2.327333),
								new google.maps.LatLng(48.872958, 2.328470)							
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
			
			$('#openLine_button').on('click', function() {
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
