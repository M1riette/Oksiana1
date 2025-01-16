// Sélectionner le GIF
const gif = document.getElementById("gif");

// Paramètres initiaux
let positionX = window.innerWidth / 2 - gif.width / 2; // Position au centre de l'écran
let vitesse = 10; // Vitesse de déplacement

// GIFs pour les mouvements
const gifs = {
    marcheDroite: "persotimed.gif",  // GIF pour marcher vers la droite
    marcheGauche: "persotimeg.gif"   // GIF pour marcher vers la gauche
};

let mouvement = "marcheDroite"; // Initialement, le personnage marche vers la droite

// Mettre à jour la position du GIF sur l'écran
function updatePosition() {
    gif.style.left = positionX + 'px';
}

// Gérer l'appui sur les flèches du clavier
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        // Si la flèche droite est pressée, déplacer le GIF à droite
        positionX += vitesse;
        if (positionX + gif.width > window.innerWidth) {
            positionX = window.innerWidth - gif.width; // Limiter le mouvement à l'écran
            // Lorsque le GIF touche le côté droit de la page, rediriger vers page2.html
            window.location.href = "page2.html";
        }
        
        // Afficher le GIF de marche vers la droite
        if (mouvement !== "marcheDroite") {
            mouvement = "marcheDroite";
            gif.src = gifs.marcheDroite;
        }
    } else if (event.key === "ArrowLeft") {
        // Si la flèche gauche est pressée, déplacer le GIF à gauche et changer d'image
        positionX -= vitesse;
        if (positionX < 0) {
            positionX = 0; // Limiter le mouvement à l'écran
            // Lorsque le GIF touche le côté gauche de la page, rediriger vers page0.html
            window.location.href = "page0.html";
        }
        
        // Afficher le GIF de marche vers la gauche
        if (mouvement !== "marcheGauche") {
            mouvement = "marcheGauche";
            gif.src = gifs.marcheGauche;
        }
    }

    // Mettre à jour la position du GIF après chaque mouvement
    updatePosition();
});

