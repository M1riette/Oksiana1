// Sélectionner le GIF
const gif = document.getElementById("gif");

// Paramètres de déplacement
const vitesse = 3; // La vitesse de déplacement du GIF
let positionX = 0; // Position initiale
let direction = 1; // 1 pour droite, -1 pour gauche

// Fonction pour animer le GIF
function animer() {
    // Déplacer le GIF
    positionX += vitesse * direction;
    
    // Appliquer la nouvelle position
    gif.style.left = positionX + "px";
    
    // Si le GIF atteint le bord droit
    if (positionX >= window.innerWidth - gif.width) {
        // Ouvrir la page 2
        window.location.href = "page2.html";
    }

    // Si le GIF atteint le bord gauche, revenir à gauche
    if (positionX <= 0) {
        direction = 1; // changer de direction
    }

    // Continuer l'animation
    requestAnimationFrame(animer);
}

// Démarrer l'animation
animer();

