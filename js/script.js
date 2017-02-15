function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 48.8582171, lng: 2.3307914},
	    zoom: 11
	});

	var infoWindow = new google.maps.InfoWindow({map: map});

	// Try HTML5 geolocation.
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {
	 	var myPosition = {
	    lat: position.coords.latitude,
	    lng: position.coords.longitude
	  	};

	  	infoWindow.setPosition(myPosition);
	  	infoWindow.setContent('Vous êtes ici!');
	  	map.setCenter(myPosition);

		// Draw a circle around the user position to have an idea of the current localization accuracy
	  	var circle = new google.maps.Circle({
			center: myPosition,
			radius: position.coords.accuracy,
			map: map,
			fillColor: '#0000FF',
			fillOpacity: 0.1,
			strokeColor: '#0000FF',
			strokeOpacity: 0.1
			});

		map.fitBounds(circle.getBounds());

		var marqueur = new google.maps.Marker ({
							position: new google.maps.LatLng(48.8283575, 2.3794178),
							map: map
						});

		$(function() {
			
			// Déclaration de la fonction qui affichera les musees sur la carte
			function afficherMusees() {
				$.ajax({
					url: 'js/json/liste_musees_paris.json',
					success: function(data) {

						for (var i = 0; i<data.length; i++) {
							console.log(data[i]);

							var donnees = data[i].fields;

							var museumIcon = 'img/icones/museum_maps.png';
							var museeumMarker = new google.maps.Marker ({
								position: new google.maps.LatLng(donnees.coordonnees_[0], donnees.coordonnees_[1]),
								map:map,
								title: donnees.nom_du_musee,
								icon: museumIcon
							});
						}
					}
				});
			}; //Fin de la fonction afficherMusees()

			$('#choice_musee').on('click', function() {
				afficherMusees();
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




