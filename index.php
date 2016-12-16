<!DOCTYPE html>

<html id="accueil">
	<head>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
		<title>Visit Paris | Accueil</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>

	<body>
		<!-- nav à placer en include sur les autres pages -->
		<header>
			<nav>
				<a href="index.php"><span>MyParis</span></a>
				<ul>
					<a href="#"><li>Monuments</li></a>
					<a href="#"><li>Musées</li></a>
					<a href="#"><li>Les plus belles vues</li></a>
				</ul>
			</nav>

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
					<form action="index.php">
						<input type="checkbox" name="monument_box">
						<label>Les monuments</label><br>
						<input type="checkbox" name="musees_box">
						<label>Les musées</label><br>
						<input type="submit" name="okButton" value="Valider">
					</form>
				
					<div id="map"></div>
				</article>
			</section>

			<section id="ballade">
				<h2>Vous ballader autrement</h2>

				<section id="transports">
					<article >
						<a href="#"><h3>Les péniches</h3></a>
						<a href="#"><img src="img/peniche_paris.jpg" alt="peniche sur la Seine"></a>
					</article>
					
					<article>
						<a href="#"><h3>Bus de tourisme</h3></a>
						<a href="#"><img src="img/bus_tourisme_paris.jpg"></a>
					</article>
				</section>
			</section>

			<section id="places">
				<h2>Les places principales</h2>

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
						<a href="#"><h3>Monmartre et le Sacré Coeur</h3></a>
					</article>
				</article>
			</section>
		</main>

		<footer>
			
		</footer>

		<script src="js/script.js"></script>

		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAI03zC_JBH5Tm6YBrRvlr1vPI5E3SUegE&signed_in=true&callback=initMap" async defer></script>
	</body>
</html>