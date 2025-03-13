// Fonction pour rediriger vers le CheminR
function goToCheminR() {
    window.location.href = "../CheminR/51.html";  // Redirige vers 51 dans CheminR
}

// Fonction pour rediriger vers le CheminC
function goToCheminC() {
    window.location.href = "../CheminC/61.html";  // Redirige vers 61 dans CheminC
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cheminRBtn").addEventListener("click", goToCheminR);
    document.getElementById("cheminCBtn").addEventListener("click", goToCheminC);
});
