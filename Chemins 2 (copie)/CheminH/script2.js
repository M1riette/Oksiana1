let objets = ["montreL", "pomme", "boussoleB"]; // Liste d'objets, sans "boussoleB"

// Fonction pour rediriger vers le CheminR (choix de la page 54)
function aller63() {
    window.location.href = "../CheminC/63.html";  // Redirige vers page 63 dans CheminC
}

// Fonction pour rediriger vers le CheminC (choix de la page 62)
function aller55() {
    window.location.href = "../CheminR/55.html";  // Redirige vers page 62 dans CheminH
}

// Fonction pour rediriger vers le CheminC (choix de la page 62)
function aller71() {
    window.location.href = "../CheminH/71.html";  // Redirige vers page 71 dans CheminH
}

// Fonction pour afficher ou cacher les boutons selon la condition
function afficherBoutons() {
    console.log("Contenu du tableau objets : ", objets);  // Affiche le contenu de la liste d'objets
    if (objets.includes("boussoleB")) {  // Si "boussoleB" est dans le tableau objets
        alert("boussoleB trouvé, affichage des boutons Refuser et Battre.");
        document.getElementById("refuserBtn").style.display = "inline";  
        document.getElementById("battreBtn").style.display = "inline";  

        document.getElementById("oeilBtn").style.display = "none";  
        document.getElementById("lanceBtn").style.display = "none";  
    } else {
        alert("boussoleB NON trouvé, affichage des autres boutons.");
        document.getElementById("oeilBtn").style.display = "inline";  
        document.getElementById("lanceBtn").style.display = "inline"; 

        document.getElementById("refuserBtn").style.display = "none";  
        document.getElementById("battreBtn").style.display = "none";    
    }
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    // Attaché les événements aux boutons
    document.getElementById("refuserBtn").addEventListener("click", aller63);
    document.getElementById("battreBtn").addEventListener("click", aller55);
    document.getElementById("oeilBtn").addEventListener("click", aller63);
    document.getElementById("lanceBtn").addEventListener("click", aller71);

    // Appeler la fonction pour afficher ou cacher les boutons au chargement
    afficherBoutons();
});
////////////////