 //////////////////////////////////////////////////////////////////////////////////////////////// 
//                                  SCRIPT JEU OKSIANA                                         //
///////////////////////////////////////////////////////////////////////////////////////////////



//dictionnaire des persos
var objets = []; // Liste d'objets gagnable selon les choix

function ajouterObjet(objet) {
    objets.push(objet);
}
//fonction qui sert a garder l'objet malgres les redirections pour que la variable ne soit pas renitialisé a 0
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//page 2
function go() {
    window.location.href = "video2.html";  // Redirige vers video2
}


// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("chat").addEventListener("click", go);
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////


//PAGE FONTAINE: what a strange place 
// Fonction pour rediriger vers la video3 
function goTovideo3() {
    window.location.href = "../commun/video3.html"; 
}



// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fontaine").addEventListener("click", goTovideo3);

});



/////////////////////////////////////////////////////////////////////////////////////////////////////////


//PAGE FONTAINE: choix, fuir ou accepter la verité ?
// Fonction pour rediriger vers le CheminR (choix de refuser)
function goToCheminR() {
    window.location.href = "../CheminR/50.html";  // Redirige vers 50 dans CheminR
}

// Fonction pour rediriger vers le CheminC (choix d'accepter)
function goToCheminC() {
    window.location.href = "../CheminC/60.html";  // Redirige vers 61 dans CheminC
    ajouterObjet("boussoleB");
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cheminRBtn").addEventListener("click", goToCheminR);
    document.getElementById("cheminCBtn").addEventListener("click", goToCheminC);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAGE ARBRE AVEC LE LAPIN:choix, le fuir ou rester comforté par lui ?

// Fonction pour rester sur la page
function resterSurPage() {
    // Pas de redirection, la page reste ouverte
    ajouterObjet("montreL");
    document.getElementById("allerCheminHBtn").style.display = "none";
    document.getElementById("restéBtn").style.display = "none";   
}

// Fonction pour aller à la page 7 dans le dossier CheminH
function allerA7() {
    window.location.href = "../CheminH/70.html";  // Redirige vers 7 dans CheminH
    ajouterObjet("pomme");
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("restéBtn").addEventListener("click", resterSurPage);
    document.getElementById("allerCheminHBtn").addEventListener("click", allerA7);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAGE THEATRE AVEC LES MASQUES:Choix, ecouter le masque 1 ou le 2 ?

// Fonction pour rediriger vers le CheminR (choix de la page 54)
function aller54() {

    window.location.href = "../CheminR/54.html";  // Redirige vers page 54 dans CheminR
}

// Fonction pour rediriger vers le CheminC (choix de la page 62)
function aller62() {
    window.location.href = "../CheminC/60.html";  // Redirige vers page 62 dans CheminC
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("masque1Btn").addEventListener("click", aller54);
    document.getElementById("masque2Btn").addEventListener("click", aller62);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAGE AQUARIUM AVEC LES PANNEAU:Choix, aller a l'oeil de l'interet ou a l'oeil de l'interet ?

// Fonction pour rediriger vers le CheminR (choix de la page 54)
function aller63() {
    window.location.href = "../CheminC/63.html";  // Redirige vers page 63 dans CheminC
}

// Fonction pour rediriger vers le CheminC (choix de la page 62)
function aller7() {
    alert("Vous allez être redirigé vers la page 7 (CheminH)");
    window.location.href = "../CheminH/7.html";  // Redirige vers page 62 dans CheminH
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("panneau1Btn").addEventListener("click", aller63);
    document.getElementById("panneau2Btn").addEventListener("click", aller7);
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JARDIN DE LA PAIX AVEC CHOIX QUI DIFFERE SELON LES OBJETS
// Fonction pour rediriger vers le CheminR (choix de la page 54)
function aller63() {
    window.location.href = "../CheminC/63.html";  // Redirige vers page 63 dans CheminC
}

// Fonction pour rediriger vers le CheminR (choix de la page 54)
function aller63p() {
    window.location.href = "../CheminC/63.html";  // Redirige vers page 63 dans CheminC
    objets.push("pomme");


}

// Fonction pour rediriger vers le CheminC (choix de la page 62)
function aller551() {
    window.location.href = "../CheminR/551.html";  // Redirige vers page 62 dans CheminH
}

// Fonction pour rediriger vers le CheminC (choix de la page 62)
function allerf4() {
    window.location.href = "../fins/f4.html";  // Redirige vers page 71 dans CheminH
}

function afficherBoutons() {
    if (objets.includes("boussoleB")) {
        console.log("boussoleB trouvé, affichage des boutons Refuser et Battre.");
        document.getElementById("refuserBtn").style.display = "inline";  
        document.getElementById("battreBtn").style.display = "inline";  

        document.getElementById("oeilBtn").style.display = "none";  
        document.getElementById("lanceBtn").style.display = "none";  
    } else {
        console.log("boussoleB NON trouvé, affichage des autres boutons.");
        document.getElementById("oeilBtn").style.display = "inline";  
        document.getElementById("lanceBtn").style.display = "inline"; 

        document.getElementById("refuserBtn").style.display = "none";  
        document.getElementById("battreBtn").style.display = "none";    
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Attacher les événements aux boutons
    document.getElementById("refuserBtn").addEventListener("click", aller63);
    document.getElementById("battreBtn").addEventListener("click", aller551);
    document.getElementById("oeilBtn").addEventListener("click", aller63p);
    document.getElementById("lanceBtn").addEventListener("click", allerf4);

    // Appeler la fonction pour afficher ou cacher les boutons après le chargement et modification des objets
    afficherBoutons();
});
///////////////////////////////////////////////////////////////////////////////////////////////
// OEIL DE L'interet AVEC DIRECTION QUI DIFFERE SELON LES OBJETS(63)

function aller64() {
    window.location.href = "../CheminC/quizz/html/Quizz.html";  
}

function allerf7() {
    window.location.href = "../fins/f7.html";
}


// Fonction pour afficher ou cacher les boutons selon la condition
function afficherBoutons2() {
   
    if (objets.includes("boussoleB")) {  // Si "boussoleB" est dans le tableau objets
        document.getElementById("QUIZZBtn").style.display = "inline";  
        document.getElementById("ForbiddenLandBtn").style.display = "none";  

    }else if (objets.includes("pomme")) {
        document.getElementById("QUIZZBtn").style.display = "none";  
        document.getElementById("Forbidden landBtn").style.display = "inline";
    }
}
	
		

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    // Attaché les événements aux boutons
    document.getElementById("QUIZZBtn").addEventListener("click", aller64);
    document.getElementById("ForbiddenLandBtn").addEventListener("click", allerf7);


    // Appeler la fonction pour afficher ou cacher les boutons au chargement

afficherBoutons2();
});

//////////////////////////////////////////////////////////////////////////////////////////////
// PAGE THE MINDEN CHOIX SOIT QUI MENE A UNE FIN SOIT A 1 AUTRE CHOIX

// Fonction pour rediriger vers 551
function aller551() {
    window.location.href = "../CheminR/551.html";  // va vers les 2 choix
}

// Fonction pour rediriger vers f3
function allerf3() {
    window.location.href = "../fins/f3.html"; 
}

// Fonction pour ouvrir le dialogue
function openDialog() {
    document.getElementById("dialogBox").showModal(); // Ouvre le dialogue
    showNextDialogue();
}

// Fonction pour fermer le dialogue
function closeDialog() {
    document.getElementById("dialogBox").close(); // Ferme le dialogue
}

// Fonction pour gérer l'affichage du dialogue étape par étape
let dialogueSteps = [
    { text: "Bunny: Meet Tommy" },
    { text: "Tommy: Hello!" },
    { text: "Oksiana: Hey... it's my old stuffed animal! I thought you were lost." },
    { text: "Tommy: Yet, I've always been here. Bunny kept me until you came back." },
    { text: "Oksiana: Until I come back?" },
    { text: "Bunny: Yes, because you always belonged here." },
    { text: "Suddenly, the monster who spoke to me in the fountain arrived" },
    { text: "Monster: What a lie. Oksiana, can't you see they're manipulating you into staying here?" },
    { text: "Bunny: Why are you here ?! Oksiana, don't believe him." },
    { text: "Monster: Wake up, don't you miss your mother ?" },
    { text: "Bunny: Stop ! Oksiana..." },

];

let currentStep = 0;

function showNextDialogue() {
    if (currentStep < dialogueSteps.length) {
        // Afficher le texte du dialogue
        document.getElementById("dialogText").innerText = dialogueSteps[currentStep].text;
        currentStep++;

        // Si on a atteint la fin du dialogue, afficher les choix
        if (currentStep === dialogueSteps.length) {
            document.getElementById("monstreBtn").style.display = "inline";
            document.getElementById("trahirBtn").style.display = "inline";
            document.getElementById("nextBtn").style.display = "none"; // Masquer le bouton suivant
        }
    }
}

// Attacher les événements après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    // Événements pour ouvrir et fermer le dialogue
    document.getElementById("openDialog").addEventListener("click", openDialog);
    document.getElementById("closeDialog").addEventListener("click", closeDialog);
    
    // Attacher les événements aux boutons dans le dialogue
    document.getElementById("nextBtn").addEventListener("click", showNextDialogue);
    document.getElementById("monstreBtn").addEventListener("click", allerf3);
    document.getElementById("trahirBtn").addEventListener("click", aller551);
});//////////////////////////////////////////////////////////////////////////////////////////////
//551, TOUJOURS THE MINDEN MAIS SPECIALEMENT SI ON TRAHIT LE LAPIN
// Fonction pour rediriger vers fin 1
function allerf1() {
    window.location.href = "../fins/f1.html";  // va vers les 2 choix
}

// Fonction pour rediriger vers fin 2
function allerf2() {
    window.location.href = "../fins/f2.html"; 
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("irlBtn").addEventListener("click", allerf1);
    document.getElementById("leaderBtn").addEventListener("click", allerf2);
});


//////////////////////////////////////////////////////////////////////////////////////////////
//, le quizz (64),et les liaisons 
//avec les fins et minis jeux


//Cette partie permet de faire marcher le personnage sur toutes les pages, et que des qu'il la droite de l'ecran, 
//ça emmene a la page suivante. !!ça a été fait avec beaucoup d'aide d'une IA mais j'ai compris le fonctionnement
//////////////////////////////////////////////////////////////////////////////////////////////
const gif = document.getElementById("gif");
const imageStatiqueDroite = "../medias/images/persotimeds.png"; // Image pour la droite
const imageStatiqueGauche = "../medias/images/persotimegs.png";  // Image pour la gauche

// Paramètres initiaux
let positionX = 0; // Position à gauche de la page
let vitesse = 20; // Vitesse de déplacement

// GIFs pour les mouvements
const gifs = {
    marcheDroite: "../medias/gif/persotimed.gif",  // GIF pour marcher vers la droite
    marcheGauche: "../medias/gif/persotimeg.gif"   // GIF pour marcher vers la gauche
};

let mouvement = "marcheDroite"; // Initialement, le personnage marche vers la droite
let derniereTouche = "";  // Variable pour stocker la dernière touche appuyée
let redirectionEffectuee = false;  // Variable pour s'assurer que la redirection ne se fait qu'une fois

// Applique les bonnes propriétés CSS au GIF pour qu'il soit déplacé
gif.style.position = 'absolute';  // Assure que l'élément est positionné absolument

// Mettre à jour la position du GIF sur l'écran
function updatePosition() {
    gif.style.left = positionX + 'px';  // Déplace le GIF en fonction de la position X
}

// Fonction pour gérer le mouvement du GIF
function marcher(event) {
    if (event.key === "ArrowRight") {
        // Si la flèche droite est pressée, déplacer le GIF à droite
        positionX += vitesse;

        if (gif.width > 0 && positionX + gif.width > window.innerWidth) {
            positionX = window.innerWidth - gif.width; // Limiter le mouvement à l'écran
        }

        // Afficher le GIF de marche vers la droite
        if (mouvement !== "marcheDroite") {
            mouvement = "marcheDroite";
            gif.src = gifs.marcheDroite;
        }

        // Vérifier si le GIF a atteint la limite droite de l'écran
        if (positionX + gif.width >= window.innerWidth && !redirectionEffectuee) {
            redirectionEffectuee = true;  // Empêcher la redirection multiple
            // Rediriger vers la prochaine page
            redirigerVersProchainePage();
        }

        // Mettre à jour la dernière touche appuyée
        derniereTouche = "ArrowRight";
    } else if (event.key === "ArrowLeft") {
        // Si la flèche gauche est pressée, déplacer le GIF à gauche et changer d'image
        positionX -= vitesse;
        if (positionX < 0) {
            positionX = 0; // Limiter le mouvement à l'écran
        }

        // Afficher le GIF de marche vers la gauche
        if (mouvement !== "marcheGauche") {
            mouvement = "marcheGauche";
            gif.src = gifs.marcheGauche;
        }

        // Mettre à jour la dernière touche appuyée
        derniereTouche = "ArrowLeft";
    }

    // Mettre à jour la position du GIF après chaque mouvement
    updatePosition();
}

// Fonction pour arrêter le mouvement lorsque la touche est relâchée
function arreterMouvement(event) {
    // Si la dernière touche appuyée était la droite, mettre l'image statique 1
    if (derniereTouche === "ArrowRight") {
        gif.src = imageStatiqueDroite;
    }
    // Si la dernière touche appuyée était la gauche, mettre l'image statique 2
    else if (derniereTouche === "ArrowLeft") {
        gif.src = imageStatiqueGauche;
    }
}

// Fonction de redirection vers la prochaine page
function redirigerVersProchainePage() {
    // Vérifie la page actuelle et redirige vers la suivante
    const currentPage = window.location.pathname;

    if (currentPage.includes("/commun/1.html")) {
        window.location.href = "../commun/2.html"; // Rediriger de 1.html à 2.html
    } else if (currentPage.includes("/commun/3.html")) {
        window.location.href = "../commun/4.html"; // Rediriger de 3.html à 4.html

    } else if (currentPage.includes("/CheminR/51.html")) {
        window.location.href = "../CheminR/52.html"; // Rediriger pour la partie chemin R
    } else if (currentPage.includes("/CheminR/52.html")) {
        window.location.href = "../CheminR/53.html"; 
    } else if (currentPage.includes("/CheminR/53.html")) {
        window.location.href = "../CheminR/54.html"; 
    } else if (currentPage.includes("/CheminR/54.html")) {
        window.location.href = "../CheminR/55.html"; 
    } else if (currentPage.includes("/CheminC/61.html")) {
        window.location.href = "../CheminC/62.html"; //rediriger pour la partie C
    }
}

// Gérer l'appui sur les flèches du clavier (keydown)
document.addEventListener('keydown', marcher);

// Gérer le relâchement des touches du clavier (keyup) pour arrêter le mouvement
document.addEventListener('keyup', arreterMouvement);

// Initialiser la position du GIF à gauche (positionX = 0)
updatePosition();
//////////////////////////////////////////////////////////////////////////

