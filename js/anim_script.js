$(document).ready(function() {

	$('#accueil header h1').fadeIn(2200, function() {
		$('#accueil header h2').fadeIn(3000);
	});

	// changement de coulour du logo quand le pointeur est dessus
	$('#logo').on('mouseenter', function() {
		$(this).css({'color': '#9fff00',
					 'transition': '0.5s'});
	});

	$('#logo').on('mouseleave', function() {
		$(this).css('color', 'lightsteelblue');
	});

	// changement de propriétés css lorque le pointeur est sur un des 'li'
	$('header li').on('mouseenter', function() {
		$(this).css({'border-top-style': 'solid', 'border-top-width': '3px',
					'border-top-color': '#0015fb', 'text-shadow': '0px 6px 5px blue'});
	});

	$('header li').on('mouseleave', function() {
		$(this).css({'border-top-color': 'black', 'text-shadow': 'none'});
	});

	// if (window.location.href.indexOf('monuments.php') > 0) {
		
	// };

	$('header li').on('click', function() {
		$(this).addClass('selected');
	});

	// Partie affichage de la map
	var showMap = $('#show_map');
	var hideMap = $('#hide_map');

	showMap.on('click', function() {
		$('#formap').css({'height': '55em', 'transition': '0.5s'});
		$('#choice_musee').fadeIn(2000);
		$('#choice_monuments').fadeIn(2000);
		$('#map').css({'opacity': '1', 'z-index': '0', 'transition': '0.7s'});
		showMap.hide();
		hideMap.fadeIn(500);


		hideMap.on('click', function() {
			$('#map').css({'opacity': '0', 'z-index': '-1', 'transition': '1s'});
			$('#formap').css({'height': '5em', 'transition': '0.5s'});
			$('#choice_musee').fadeOut(200);
			$('#choice_monuments').fadeOut(200);
			hideMap.hide();
			showMap.fadeIn(500);
			});
	});

	$('.button').on('mouseenter', function() {
		$(this).css({'background-color': 'rgba(31, 192, 192, 0.85)', 'transition': '0.6s'})
	});

	$('.button').on('mouseleave', function(){
		$(this).css({'background-color': 'rgba(31, 192, 192, 0.39)', 'transition': '0.6s'})
	});

	$('.button').on('click', function() {
		$(this).css({'background-color': 'rgba(110, 221, 21)', 'transition': 'none'});
	});
});