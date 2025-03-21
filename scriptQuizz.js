
//Explication du script :
// compteurOui et compteurNon servent à stocker le nombre de réponses "Oui" et "Non".
// La fonction enregistrerReponse() prend deux paramètres : la réponse sélectionnée et l'ID de la question.
// Lorsqu'un bouton est cliqué, les autres boutons de la question sont désactivés.
// Une fois toutes les questions répondues, l'utilisateur est redirigé vers oui.html ou non.html en fonction du plus grand nombre de réponses.


let compteurOui = 0; // Compteur des réponses "Oui"
let compteurNon = 0; // Compteur des réponses "Non"

function enregistrerReponse(reponse, questionId) {
	let questionDiv = document.getElementById(questionId); // Récupère la question par son ID
	let boutons = questionDiv.querySelectorAll("button"); // Sélectionne tous les boutons de la question
            
	boutons.forEach(btn => btn.disabled = true); // Désactive les boutons après une sélection
            
	if (reponse === "oui") { // Vérifie si la réponse est "Oui"
		compteurOui++; // Incrémente le compteur Oui
	} else { // Si la réponse est "Non"
		compteurNon++; // Incrémente le compteur Non
	}

	let nombreTotalQuestions = document.querySelectorAll(".question").length; // Compte le nombre total de questions
	if (compteurOui + compteurNon === nombreTotalQuestions) { // Vérifie si toutes les questions ont une réponse
		if (compteurOui > compteurNon) {
			window.location.href = "oui.html"; // Redirige vers oui.html si plus de Oui
		} else {
			window.location.href = "non.html"; // Redirige vers non.html si plus de Non
		}
	}
}

