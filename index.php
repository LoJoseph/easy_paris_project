<!DOCTYPE html>

<html id="accueil">
	<head>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
		<title>Visit Paris | Accueil</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>

	<body>
		<!-- Header à placer en include sur les autres pages -->
		<header>
			<nav>
				<span>VisitParis</span>
				<ul>
					<a href="#"><li>Monuments</li></a>
					<a href="#"><li>Musées</li></a>
					<a href="#"><li>Les plus belles vues</li></a>
				</ul>
			</nav>

			<article id="title_accueil">
					<h1>Visit Paris</h1>
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

				<article>
					<h3>Les péniches</h3>
					<img src="img/peniche_paris.jpg" alt="peniche sur la Seine">
				</article>
				
				<article>
					<h3>Bus de tourisme</h3>

				</article>
			</section>

			<section>
				<h2>Les principaux monuments</h2>
			</section>
		</main>

		<footer>
			
		</footer>

		<script src="js/script.js"></script>

		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAI03zC_JBH5Tm6YBrRvlr1vPI5E3SUegE&signed_in=true&callback=initMap" async defer></script>
	</body>
</html>