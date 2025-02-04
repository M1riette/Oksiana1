// Initialiser les variables

const listeFleches = ['↑','↓','←','→']; // liste des flèches 
const touchesClavier = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight']; // Correspondances des touches clavier
let flecheActuelle = null; // La flèche actuellement affichée

let score = 0; // Initialisation du score à 0
let tempsMax = 20; // Temps maximal pour le jeu
let compteurTemps = tempsMax;

const scoreCible = 15; // score min necessaire pour gagner partie


let intervalleFleches; // Variable pour stocker l'intervalle de génération des flèches
let intervalleTemps; // Variable pour stocker l'intervalle du chrono


// Demarer le chrono

function demarrerChrono() {
	intervalleTemps = setInterval(function() {
        	compteurTemps = compteurTemps - 1; // Décrémenter le temps
        	tempsElement.textContent = "Temps : " + compteurTemps + "s"; // Mettre à jour l'affichage du temps
		if (compteurTemps === 0) { // Si le temps est écoulé
            		clearInterval(intervalleTemps); // Arrête l'intervalle
            		finDuJeuDefaite(); // Appelle la fonction de fin du jeu 
        	}
    	}, 1000); // Exécuter toutes les secondes
}





// Cacher ou afficher le conteneur des flèches

const boutonCommencer = document.getElementById('commencerJeu');
const conteneurFleches = document.querySelector('.conteneurFleches');
const tempsElement = document.getElementById('temps');
const scoreElement = document.getElementById("score");


function afficherConteneur() {
    	conteneurFleches.style.display = 'flex'; // Afficher le conteneur des flèches

	demarrerChrono(); // Démarrer le chrono
	genererFleche(); // Générer la première flèche immédiatement

	intervalleFleches = setInterval(genererFleche, 700);
}





// Générer les flèches aléatoirement

function genererFleche() {
	const nombreAleatoire = Math.floor(Math.random()* listeFleches.length); // Générer un nombre aléatoire


// Utiliser ce nombre pour choisir une fleche et sa touche correspondante

	flecheActuelle = touchesClavier[nombreAleatoire]; // Affecter la touche correspondante à flecheActuelle
	let flecheChoisie = listeFleches[nombreAleatoire];


// Afficher la fleche dans la zone 

	let elementFleche = document.getElementById('fleche'); // Récupérer l'élément HTML
	elementFleche.textContent = flecheChoisie; // Afficher la flèche dans le conteneur fleche 
}



// Vérifier si la touche appuyée est correcte

document.addEventListener("keydown", (event) => {

	console.log("Touche appuyée : ", event.key);
	console.log("Touche actuelle : ", flecheActuelle);

	// Si la touche appuyée correspond à la bonne flèche
        if (event.key === flecheActuelle) {
         	score = score + 1; // Augmente le score
		scoreElement.textContent = "Score : " + score; // Mettre à jour le score
		verifierFinJeu(); // Vérifier si le jeu est terminé
	}
});




function verifierFinJeu() {

// Si le score atteint la cible
	if (score === scoreCible) {
		clearInterval(intervalleFleches); // Arrêter la génération des flèches
		clearInterval(intervalleTemps); // Arrêter le chrono
		finDuJeuVictoire(); // Appeler la fonction de fin du jeu
	} 

// Si le temps est écoulé
	else if (compteurTemps === 0) {
		clearInterval(intervalleFleches); // Arrêter la génération des flèches
		clearInterval(intervalleTemps); // Arrêter le chrono
		finDuJeuDefaite(); // Appeler la fonction de fin du jeu si le temps est écoulé
	}
}



// Fonction pour la fin du jeu en cas de victoire

function finDuJeuVictoire() {
    	conteneurFleches.style.display = 'none'; // Masquer le conteneur des flèches
    	alert("Félicitations ! Vous avez atteint le score cible !"); // Afficher le message de victoire
    	resetJeu(); // Réinitialiser les variables pour une nouvelle partie
}




// Fonction pour la fin du jeu en cas de défaite (temps écoulé)

function finDuJeuDefaite() {
    	conteneurFleches.style.display = 'none'; // Masquer le conteneur des flèches
    	alert("Temps écoulé ! Vous n'avez pas atteint le score cible."); // Afficher le message de défaite
    	resetJeu(); // Réinitialiser les variables pour une nouvelle partie
}





// Fonction pour réinitialiser le jeu (score et temps)

function resetJeu() {
    	compteurTemps = tempsMax; // Réinitialiser le temps pour une nouvelle partie
    	tempsElement.textContent = "Temps : " + tempsMax + "s"; // Réinitialiser l'affichage du temps
	score = 0; // Réinitialiser le score
    	scoreElement.textContent = "Score : " + score; // Réinitialiser l'affichage du score
    	
}



boutonCommencer.addEventListener('click', afficherConteneur); // Lancer le jeu lorsqu'on clique sur "commencer"










