<!DOCTYPE html>
<html id="bus_tour">
	<head>
		<meta charset="utf-8">
		<title>Les bus de tourisme - bus tour</title>
		<link rel="stylesheet" type="text/css" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>

	<body>

		<header>
			<?php include_once 'inc/nav.inc.php'; ?>
		</header>

		<main>
			<h1>Les bus de tourismes</h1>

			<h2>Visitez Paris autrement à bord d'un des bus de tourisme</h2>

			<section>
				<h3>L'Open Tour</h3>
				<img src="img/open_tour.jpg">
				<button id="openLine_button" class="button">Afficher un des circuits</button>
				<div id="map_openTour"></div>
				<a href="http://www.paris.opentour.com/fr/">Voir les autres lignes sur paris.opentour.com</a>
			</section>

			<section>
				<h3>Foxity</h3>
				<img src="img/foxity_bus.jpg">
				<button id="foxity_button" class="button">Afficher un des circuits</button>
				<div id="map_foxity"></div>
				<a href="http://www.foxity.com/visite-de-paris-en-bus-imperiale/horaires-foxity.php">Lien pour visiter Foxity</a>
			</section>

			<section>
				<h3>BigBus Paris</h3>
				<img src="img/bigbus.jpg">
				<button id="bigB_button" class="button">Afficher un des circuits</button>
				<div id="map_bigbus"></div>
				<a href="https://www.bigbustours.com/fr/paris/visites-paris-bus/">Lien vers BigBus paris</a>
			</section>

		</main>

		<footer>
			
		</footer>

		<script src="https://code.jquery.com/jquery-1.12.3.js"   integrity="sha256-1XMpEtA4eKXNNpXcJ1pmMPs8JV+nwLdEqwiJeCQEkyc="   crossorigin="anonymous"></script>

		<script src="js/bus_script.js"></script>

		<?php include_once 'inc/anim_link.php'; ?>

		<?php include_once 'inc/j_templates_parts/script_link_maps.php'; ?>
	</body>
</html>