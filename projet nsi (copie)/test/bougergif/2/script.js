// Récupérer l'élément GIF
const gif = document.getElementById('gif');

// Position initiale du GIF
let posX = 100;  // Position de départ en X
let posY = 100;  // Position de départ en Y

// Appliquer la position au GIF
function updatePosition() {
    gif.style.left = `${posX}px`;
    gif.style.top = `${posY}px`;
}

// Mettre à jour la position initiale
updatePosition();

// Ajouter un écouteur d'événement pour les touches du clavier
window.addEventListener('keydown', function(event) {
    const speed = 10;  // Vitesse de déplacement

    // Déplacer le GIF selon la touche appuyée
    if (event.key === 'ArrowRight') {  // Flèche droite
        posX += speed;
        // Revenir au premier GIF si la flèche droite est appuyée
        gif.src = 'persotimed.gif';  // Remplace par ton GIF initial
    } else if (event.key === 'ArrowLeft') {  // Flèche gauche
        posX -= speed;
        // Changer l'image du GIF si la flèche gauche est appuyée
        gif.src = 'persotimeg.gif';  // Remplace par ton second GIF
    } else if (event.key === 'ArrowUp') {  // Flèche haut (facultatif)
        posY -= speed;
    } else if (event.key === 'ArrowDown') {  // Flèche bas (facultatif)
        posY += speed;
    }

    // Mettre à jour la position après chaque mouvement
    updatePosition();
});
