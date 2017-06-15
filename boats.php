<!DOCTYPE html>


<html id="boatPage">
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>

	<body>
		<header>
			<?php include_once 'inc/nav.inc.php'; ?>
		</header>

		<article id="Boat_titles">
			<h1>Les Bateaux-Mouches</h1>

			<h2>Montez à bord d'un des bateaux-mouches pour voir la ville sous un autre angle</h2>
		</article>
		
		<section id="boatEnterprises">
			<article id="bateauxParisiens">
				<h3>Bateaux Parisiens</h3>
				<img src="img/bateaux/bateaux_parisiens.jpg">
				<div id="map_bateauxParisiens"></div>
				<a href="http://www.bateaux-mouches.fr/fr">Pour plus d'informations, cliquez ici!</a>
			</article>

			<article id="bateauxMouches">
				<h3>Bateaux mouches</h3>
				<img src="img/bateaux/bateauxMouches.jpg">
				<div id="map_bateauxMouches"></div>
				<a href="http://www.bateauxparisiens.com/fr/croisieres-promenades/croisieres-commentees.html">Pour plus d'informations, cliquez ici!</a>
			</article>
		</section>

		<footer>
			
		</footer>

		<script src="https://code.jquery.com/jquery-1.12.3.js"   integrity="sha256-1XMpEtA4eKXNNpXcJ1pmMPs8JV+nwLdEqwiJeCQEkyc="   crossorigin="anonymous"></script>

		<script src="js/bus_script.js"></script>

		<?php include_once 'inc/anim_link.php'; ?>

		<?php include_once 'inc/j_templates_parts/script_link_maps.php'; ?>
	</body>
</html>