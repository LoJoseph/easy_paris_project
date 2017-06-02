<!DOCTYPE html>

<html id="accueil">
	<head>
		<!-- <meta name="viewport" content="initial-scale=1.0, user-scalable=no"> -->
		<meta charset="utf-8">
		<title>Visit Paris | Accueil</title>
		<link rel="stylesheet" type="text/css" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>

	<body>
		<header>
			<?php include_once 'inc/nav.inc.php'; ?>
			
			<article id="title_accueil">
					<h1>My Paris</h1>
					<h2>Tout Paris à portée de main!</h2>
			</article>
		</header>

		<main>
			<section>
			<!-- Formulaire et carte interactive -->
				<article id="formap">
					<h3>Qu'est-ce qui vous intéresse?</h3>
					<button id="show_map" class="button">Afficher la carte interactive</button>
					<button id="hide_map" class="button">Masquer la carte</button>
					<form id="choices_form" action="index.php">
						<input type="button" name="musees" id="choice_musee" value="Les musées">
						<input type="button" name="musees" id="choice_monuments" value="Les monuments">
					</form>
				
					<div id="map"></div>
				</article>
			</section>

			<section id="ballade">
				<h2>Vous ballader autrement</h2>

				<section id="transports">
					<article>
						<a href="boats.php"><h3>Les bateaux-mouches</h3></a>
						<a href="boats.php"><img src="img/peniche_paris.jpg" alt="peniche sur la Seine"></a>
					</article>
					
					<article>
						<a href="bus_tours.php"><h3>Les bus de tourisme</h3></a>
						<a href="bus_tours.php"><img src="img/bus_tourisme_paris.jpg"></a>
					</article>
				</section>
			</section>

			<section id="places">
				<h2>Les places majeurs</h2>

				<article>
					<article>
						<a href="#"><img src="img/img_monuments/trocadero_tour_eiffel.jpg" alt="vue de la tour eiffel de Trocadero"></a>
						<a href="#"><h3>Trocadero et le Champs de Mars</h3></a>
					</article>
						
					<article>
						<a href="#"><img src="img/img_monuments/champs_elysees_illuminations.jpg"></a>
						<a href="#"><h3>Les champs Elysées</h3></a>
					</article>

					<article>
						<a href="#"><img src="img/img_monuments/montmartre.jpg"></a>
						<a href="#"><h3>Montmartre et le Sacré Coeur</h3></a>
					</article>
				</article>
			</section>
		</main>

		<footer>
			
		</footer>

		<script src="https://code.jquery.com/jquery-1.12.3.js"   integrity="sha256-1XMpEtA4eKXNNpXcJ1pmMPs8JV+nwLdEqwiJeCQEkyc="   crossorigin="anonymous"></script>

		<script src="js/script.js"></script>

		<?php include_once 'inc/anim_link.php'; ?>

		<?php include_once 'inc/j_templates_parts/script_link_maps.php'; ?>


	</body>
</html>