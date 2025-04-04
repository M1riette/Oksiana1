function afficherInfos() {
	var description; // Déclare une variable pour stocker l'élément contenant les informations du jeu
    description = document.getElementById("descriptionJeu"); // Récupère l'élément HTML ayant l'id "descriptionJeu"
            
	if (description.style.display === "none") { // Vérifie si l'élément est actuellement caché
		description.style.display = "block"; // Si oui, change le style pour l'afficher
	} else {
		description.style.display = "none"; // Sinon, le cache à nouveau
	}
}
