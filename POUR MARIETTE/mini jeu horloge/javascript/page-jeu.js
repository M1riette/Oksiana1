    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.lineTo(75 + 30 * Math.cos(angleHeure - Math.PI / 2), 75 + 30 * Math.sin(angleHeure - Math.PI / 2));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.lineTo(75 + 50 * Math.cos(angleMinute - Math.PI / 2), 75 + 50 * Math.sin(angleMinute - Math.PI / 2));
    ctx.stroke();
}

function ajusterAiguille(type) {
    if (type === "heure") heureJoueur = (heureJoueur + 1) % 12;
    else minuteJoueur = (minuteJoueur + 5) % 60;
    dessinerHorloge(ctxJoueur, heureJoueur, minuteJoueur, "black");
}

function verifierReussite() {
    let diffHeure = Math.abs(heureJoueur - heureCible);
    let diffMinute = Math.abs(minuteJoueur - minuteCible);

    // Tolérance : 1 heure d'écart maximum et 5 minutes d'écart maximum
    if (diffHeure <= 1 || diffMinute <= 5) {
        document.getElementById("message").textContent = "Bravo ! Vous pouvez continuer.";
        setTimeout(() => {
            window.location.href = "page-suivante.html";
        }, 2000);
    } else {
        document.getElementById("message").textContent = "Essayez encore.";
    }
}

dessinerHorloge(ctxExemple, heureCible, minuteCible, "pink");
dessinerHorloge(ctxJoueur, heureJoueur, minuteJoueur, "black");
