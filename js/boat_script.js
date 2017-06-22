function initMap() {
	var mapBateauxParisien = new google.maps.Map(document.getElementById('map_bateauxParisiens'), {
	    center: {lat: 48.8620131, lng: 2.3006653},
	    zoom: 16
	});

	var mapBateauxMouches = new google.maps.Map(document.getElementById('map_bateauxMouches'), {
	    center: {lat: 48.8582171, lng: 2.3307914},
	    zoom: 16
	});

	mapBateauxParisien.setOptions({draggable: true, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});

	// Marqueur emplacement Bateaux Parisiens
	var bpPosMarker = new google.maps.Marker ({
							position: new google.maps.LatLng(48.860332, 2.293708),
							map: mapBateauxParisien
	});

	var bMouchesposMarker = new google.maps.Marker ({
									position: new google.maps.LatLng(48.8640203, 2.3053464),
									map: mapBateauxMouches
	});

	// position de la Tour Eiffel
	var eiffel_tower_icon = 'img/icones/tour_eiffel.png'
	var eiffelTowerMarker = new google.maps.Marker ({
									position: new google.maps.LatLng(48.857470, 2.294531),
									map: mapBateauxParisien,
									icon: eiffel_tower_icon
								 });

	function afficherTourBp() {
		var tourBateauxParisiens = [
			new google.maps.LatLng(48.860544, 2.293623),
			new google.maps.LatLng(48.861026, 2.294173),
			new google.maps.LatLng(48.861502, 2.294908),
			new google.maps.LatLng(48.861636, 2.295090),
			new google.maps.LatLng(48.861851, 2.295417),
			new google.maps.LatLng(48.861992, 2.295798),
			new google.maps.LatLng(48.862144, 2.296174),
			new google.maps.LatLng(48.862811, 2.298797),
			new google.maps.LatLng(48.862998, 2.299752),
			new google.maps.LatLng(48.863069, 2.300036),
			new google.maps.LatLng(48.863143, 2.300379),
			new google.maps.LatLng(48.863182, 2.300717),
			new google.maps.LatLng(48.863221, 2.301157),
			new google.maps.LatLng(48.863306, 2.302841),
			new google.maps.LatLng(48.863313, 2.306339),
			new google.maps.LatLng(48.863581, 2.316843),
			new google.maps.LatLng(48.863525, 2.317798),
			new google.maps.LatLng(48.863514, 2.317929),
			new google.maps.LatLng(48.863505, 2.318028),
			new google.maps.LatLng(48.863494, 2.318162),
			new google.maps.LatLng(48.863446, 2.318350),
			new google.maps.LatLng(48.863210, 2.319045),
			new google.maps.LatLng(48.863210, 2.319045),
			new google.maps.LatLng(48.859561, 2.330804),
			new google.maps.LatLng(48.857803, 2.338625),
			new google.maps.LatLng(48.857775, 2.338715),
			new google.maps.LatLng(48.857694, 2.338881),
			new google.maps.LatLng(48.856685, 2.340641),
			new google.maps.LatLng(48.854941, 2.342637),
			new google.maps.LatLng(48.854923, 2.342656),
			new google.maps.LatLng(48.854877, 2.342750),
			new google.maps.LatLng(48.853416, 2.346687),
			new google.maps.LatLng(48.852703, 2.348393),
			new google.maps.LatLng(48.852046, 2.349992),
			new google.maps.LatLng(48.851347, 2.352953),
			new google.maps.LatLng(48.848954, 2.360345),
			new google.maps.LatLng(48.848952, 2.360436),
			new google.maps.LatLng(48.848956, 2.360525),
			new google.maps.LatLng(48.848975, 2.360611),
			new google.maps.LatLng(48.849049, 2.360732),
			new google.maps.LatLng(48.849139, 2.360818),
			new google.maps.LatLng(48.849331, 2.360853),
			new google.maps.LatLng(48.849610, 2.360722),
			new google.maps.LatLng(48.851320, 2.360510),
			new google.maps.LatLng(48.851493, 2.360408),
			new google.maps.LatLng(48.851579, 2.360341),
			new google.maps.LatLng(48.851671, 2.360226),
			new google.maps.LatLng(48.854613, 2.352139),
			new google.maps.LatLng(48.855763, 2.349747),
			new google.maps.LatLng(48.858678, 2.338010),
			new google.maps.LatLng(48.859991, 2.331691),
			new google.maps.LatLng(48.864007, 2.318838),
			new google.maps.LatLng(48.864065, 2.318690),
			new google.maps.LatLng(48.864113, 2.318551),
			new google.maps.LatLng(48.864148, 2.318422),
			new google.maps.LatLng(48.863702, 2.302278),
			new google.maps.LatLng(48.863730, 2.300282),
			new google.maps.LatLng(48.863702, 2.299670),
			new google.maps.LatLng(48.862276, 2.294735),
			new google.maps.LatLng(48.862227, 2.294574),
			new google.maps.LatLng(48.862171, 2.294354),
			new google.maps.LatLng(48.862033, 2.294048),
			new google.maps.LatLng(48.860297, 2.291682),
			new google.maps.LatLng(48.859958, 2.291333),
			new google.maps.LatLng(48.859847, 2.291223),
			new google.maps.LatLng(48.859725, 2.291140),
			new google.maps.LatLng(48.859624, 2.291086),
			new google.maps.LatLng(48.859545, 2.291067),
			new google.maps.LatLng(48.859464, 2.291072),
			new google.maps.LatLng(48.859383, 2.291174),
			new google.maps.LatLng(48.859334, 2.291311),
			new google.maps.LatLng(48.859306, 2.291464),
			new google.maps.LatLng(48.859302, 2.291644),
			new google.maps.LatLng(48.859304, 2.291810),
			new google.maps.LatLng(48.859510, 2.292282),
			new google.maps.LatLng(48.860089, 2.292851)
		];

		var parcoursBp = new google.maps.Polyline({
			path: tourBateauxParisiens,
			strokeColor: "#1ec1c1",
			strokeOpacity: 1.0,
			strokeWeight: 3,
			geodesic: true,
			map: mapBateauxParisien
		});
	}

	function afficherTourBmouches() {
		var tourBateauxMouches = [
			
			new google.maps.LatLng(48.862144, 2.296174),
			new google.maps.LatLng(48.862811, 2.298797),
			new google.maps.LatLng(48.862998, 2.299752),
			new google.maps.LatLng(48.863069, 2.300036),
			new google.maps.LatLng(48.863143, 2.300379),
			new google.maps.LatLng(48.863182, 2.300717),
			new google.maps.LatLng(48.863221, 2.301157),
			new google.maps.LatLng(48.863306, 2.302841),
			new google.maps.LatLng(48.863313, 2.306339),
			new google.maps.LatLng(48.863581, 2.316843),
			new google.maps.LatLng(48.863525, 2.317798),
			new google.maps.LatLng(48.863514, 2.317929),
			new google.maps.LatLng(48.863505, 2.318028),
			new google.maps.LatLng(48.863494, 2.318162),
			new google.maps.LatLng(48.863446, 2.318350),
			new google.maps.LatLng(48.863210, 2.319045),
			new google.maps.LatLng(48.863210, 2.319045),
			new google.maps.LatLng(48.859561, 2.330804),
			new google.maps.LatLng(48.857803, 2.338625),
			new google.maps.LatLng(48.857775, 2.338715),
			new google.maps.LatLng(48.857694, 2.338881),
			new google.maps.LatLng(48.856685, 2.340641),
			new google.maps.LatLng(48.854941, 2.342637),
			new google.maps.LatLng(48.854923, 2.342656),
			new google.maps.LatLng(48.854877, 2.342750),
			new google.maps.LatLng(48.853416, 2.346687),
			new google.maps.LatLng(48.852703, 2.348393),
			new google.maps.LatLng(48.852046, 2.349992),
			new google.maps.LatLng(48.851347, 2.352953),
			new google.maps.LatLng(48.848954, 2.360345),
			new google.maps.LatLng(48.848952, 2.360436),
			new google.maps.LatLng(48.848956, 2.360525),
			new google.maps.LatLng(48.848975, 2.360611),
			new google.maps.LatLng(48.849049, 2.360732),
			new google.maps.LatLng(48.849139, 2.360818),
			new google.maps.LatLng(48.849331, 2.360853),
			new google.maps.LatLng(48.849610, 2.360722),
			new google.maps.LatLng(48.851320, 2.360510),
			new google.maps.LatLng(48.851493, 2.360408),
			new google.maps.LatLng(48.851579, 2.360341),
			new google.maps.LatLng(48.851671, 2.360226),
			new google.maps.LatLng(48.854613, 2.352139),
			new google.maps.LatLng(48.855763, 2.349747),
			new google.maps.LatLng(48.858678, 2.338010),
			new google.maps.LatLng(48.859991, 2.331691),
			new google.maps.LatLng(48.864007, 2.318838),
			new google.maps.LatLng(48.864065, 2.318690),
			new google.maps.LatLng(48.864113, 2.318551),
			new google.maps.LatLng(48.864148, 2.318422),
			new google.maps.LatLng(48.863702, 2.302278)
		];

		var parcoursBm = new google.maps.Polyline({
			path: tourBateauxMouches,
			strokeColor: "#1ec1c1",
			strokeOpacity: 1.0,
			strokeWeight: 3,
			geodesic: true,
			map: mapBateauxMouches
		});
	}



	$(document).ready(function() {
		$('#BateauxPar_button').on('click', function() {
			afficherTourBp();
		});

		$('#BateauxMou_button').on('click', function() {
			afficherTourBmouches();
		});
	});
}