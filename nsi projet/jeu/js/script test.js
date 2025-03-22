
//dictionnaire des persos
//faire gaffe aux trucs de math dans le code !!

let objets = []; // Liste d'objets gagnable selon les choix
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAGE FONTAINE: choix, fuir ou accepter la verité ?
// Fonction pour rediriger vers le CheminR (choix de refuser)
function goToCheminR() {
    window.location.href = "../CheminR/51.html";  // Redirige vers 51 dans CheminR
}

// Fonction pour rediriger vers le CheminC (choix d'accepter)
function goToCheminC() {
    window.location.href = "../CheminC/61.html";  // Redirige vers 61 dans CheminC
    objets.push("boussoleB")
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
    objets.push("montreL");
    alert("Vous êtes resté conforté par lui sur cette page Bunny vous a donné la montre lapin !");
    document.getElementById("allerCheminHBtn").style.display = "none";
    document.getElementById("restéBtn").style.display = "none";

    
}

// Fonction pour aller à la page 7 dans le dossier CheminH
function allerA7() {
    window.location.href = "../CheminH/7.html";  // Redirige vers 7 dans CheminH
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
    alert("Vous allez être redirigé vers la page 54 (CheminR)");
    window.location.href = "../CheminR/54.html";  // Redirige vers page 54 dans CheminR
    objets.remove("montreL");
}

// Fonction pour rediriger vers le CheminC (choix de la page 62)
function aller62() {
    alert("Vous allez être redirigé vers la page 62 (CheminC)");
    window.location.href = "../CheminC/62.html";  // Redirige vers page 62 dans CheminC
}

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("masque1Btn").addEventListener("click", aller54);
    document.getElementById("masque2Btn").addEventListener("click", aller62);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAGE DESERT DE PASTEQUE AVEC LES PANNEAU:Choix, aller a l'oeil de l'interet ou a l'oeil de l'interet ?

// Fonction pour rediriger vers le CheminR (choix de la page 54)
function aller63() {
    alert("Vous allez être redirigé vers la page 63 (CheminR)");
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
    document.getElementById("oeilBtn").addEventListener("click", aller63p);
    document.getElementById("lanceBtn").addEventListener("click", aller71);

    // Appeler la fonction pour afficher ou cacher les boutons au chargement
    afficherBoutons();
});
///////////////////////////////////////////////////////////////////////////////////////////////
// OEIL DE L'interet AVEC DIRECTION QUI DIFFERE SELON LES OBJETS(63)
// Fonction pour rediriger vers le CheminR (choix de la page 54)
function aller64() {
    window.location.href = "../CheminC/64.html";  // Redirige vers page 64 dans CheminC
}

// Fonction pour rediriger vers le CheminR (choix de la page 54)
function allerf7() {
    window.location.href = "../fins/f7.html";  // Redirige vers page 63 dans CheminC


}

// Fonction pour afficher ou cacher les boutons selon la condition
function afficherBoutons2() {
   
    if (objets.includes("boussoleB")) {  // Si "boussoleB" est dans le tableau objets
        alert("boussoleB trouvé.");
        document.getElementById("QUIZZBtn").style.display = "inline";  
        document.getElementById("Forbidden landBtn").style.display = "none";  

    }else if (objets.includes("pomme")) {
        alert("POMME trouvé");
        document.getElementById("QUIZZBtn").style.display = "none";  
        document.getElementById("Forbidden landBtn").style.display = "inline";
    }
}
	
		

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    // Attaché les événements aux boutons
    document.getElementById("QUIZZBtn").addEventListener("click", aller64);
    document.getElementById("Forbidden landBtn").addEventListener("click", allerf7);


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

// Attacher les événements aux boutons après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("monstreBtn").addEventListener("click", allerf3);
    document.getElementById("trahirBtn").addEventListener("click", aller551);
});


//////////////////////////////////////////////////////////////////////////////////////////////
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
const video = document.getElementById('video'); // Sélectionner l'élément vidéo

let positionX = 0; // Position à gauche de la page
let vitesse = 20; // Vitesse de déplacement

const gifs = {
    marcheDroite: "../medias/gif/persotimed.gif",  // GIF pour marcher vers la droite
    marcheGauche: "../medias/gif/persotimeg.gif"   // GIF pour marcher vers la gauche
};

let mouvement = "marcheDroite"; // Initialement, le personnage marche vers la droite
let derniereTouche = "";  // Variable pour stocker la dernière touche appuyée
let redirectionEffectuee = false;  // Variable pour s'assurer que la redirection ne se fait qu'une fois

gif.style.position = 'absolute';  // Assure que l'élément est positionné absolument

function updatePosition() {
    gif.style.left = positionX + 'px';  // Déplace le GIF en fonction de la position X
}

// Fonction pour gérer le mouvement du GIF
function marcher(event) {
    if (event.key === "ArrowRight") {
        positionX += vitesse;

        if (gif.width > 0 && positionX + gif.width > window.innerWidth) {
            positionX = window.innerWidth - gif.width; // Limiter le mouvement à l'écran
        }

        if (mouvement !== "marcheDroite") {
            mouvement = "marcheDroite";
            gif.src = gifs.marcheDroite;
        }

        if (positionX + gif.width >= window.innerWidth && !redirectionEffectuee) {
            redirectionEffectuee = true;
            // Lancer la vidéo en plein écran
            playFullScreenVideo();
            // Rediriger vers la page suivante après un délai, pour laisser le temps à la vidéo de jouer
            setTimeout(redirigerVersProchainePage, 5000); // 5000ms = 5 secondes, ajustez selon la durée de la vidéo
        }

        derniereTouche = "ArrowRight";
    } else if (event.key === "ArrowLeft") {
        positionX -= vitesse;
        if (positionX < 0) {
            positionX = 0; // Limiter le mouvement à l'écran
        }

        if (mouvement !== "marcheGauche") {
            mouvement = "marcheGauche";
            gif.src = gifs.marcheGauche;
        }

        derniereTouche = "ArrowLeft";
    }

    updatePosition();
}

// Fonction pour arrêter le mouvement lorsque la touche est relâchée
function arreterMouvement(event) {
    if (derniereTouche === "ArrowRight") {
        gif.src = imageStatiqueDroite;
    } else if (derniereTouche === "ArrowLeft") {
        gif.src = imageStatiqueGauche;
    }
}

// Fonction pour lancer la vidéo en plein écran
function playFullScreenVideo() {
    video.style.display = 'block'; // Afficher la vidéo
    video.play(); // Jouer la vidéo
    video.onended = () => {
        video.style.display = 'none'; // Cacher la vidéo lorsque terminée
    };
}

// Fonction de redirection vers la prochaine page
function redirigerVersProchainePage() {
    const currentPage = window.location.pathname;

    if (currentPage.includes("/commun/1.html")) {
        window.location.href = "../commun/2.html";
    } else if (currentPage.includes("/commun/2.html")) {
        window.location.href = "../commun/3.html";
    } else if (currentPage.includes("/commun/3.html")) {
        window.location.href = "../commun/4.html";
    } else if (currentPage.includes("/CheminR/51.html")) {
        window.location.href = "../CheminR/52.html";
    } else if (currentPage.includes("/CheminR/52.html")) {
        window.location.href = "../CheminR/53.html";
    } else if (currentPage.includes("/CheminR/53.html")) {
        window.location.href = "../CheminR/54.html";
    } else if (currentPage.includes("/CheminR/54.html")) {
        window.location.href = "../CheminR/55.html";
    } else if (currentPage.includes("/CheminC/61.html")) {
        window.location.href = "../CheminC/62.html";
    }
}

document.addEventListener('keydown', marcher);
document.addEventListener('keyup', arreterMouvement);

updatePosition();

//////////////////////////////////////////////////////////////////////////
//Cette partie est pour lancer les animations et videos

// Sélectionner les éléments GIF et vidéo
const gif = document.getElementById('gif');
const video = document.getElementById('video');

// Fonction pour vérifier la position du GIF et lancer la vidéo
function checkGifPosition() {
    const gifRect = gif.getBoundingClientRect();
    
    // Vérifier si le GIF est à 50% de l'écran
    if (gifRect.left <= window.innerWidth / 2 && !video.playing) {
        playVideo();
    }
}

// Lancer la vidéo en plein écran
function playVideo() {
    video.style.display = 'block'; // Afficher la vidéo
    video.play(); // Jouer la vidéo
    
    // Une fois la vidéo terminée, la masquer
    video.onended = () => {
        video.style.display = 'none'; // Masquer la vidéo
    };
}

// Surveiller le mouvement du GIF
window.addEventListener('scroll', checkGifPosition);

