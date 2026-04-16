
// ================================
// Classe Television
// ================================
class Television {

    // Le constructeur crée la télévision avec ses caractéristiques
    constructor(taille, couleur, poids, fabricant) {
        this.taille    = taille;
        this.couleur   = couleur;
        this.poids     = poids;
        this.fabricant = fabricant;
    }

    // Méthode allumer
    allumer() {
        console.log("La télévision est allumée");
    }

    // Méthode eteindre
    eteindre() {
        console.log("La télévision est éteinte");
    }

}

// Je crée une télévision et on la teste
let maTele = new Television(55, "noir", 12, "Samsung");
console.log("Taille    : ", maTele.taille);
console.log("Couleur   : ", maTele.couleur);
console.log("Poids     : ", maTele.poids);
console.log("Fabricant : ", maTele.fabricant);
maTele.allumer();
maTele.eteindre();



// ================================
// Classe Ecran (enfant de Television)
// ================================
class Ecran extends Television {

    // Je reprend les propriétés de Television et J'ajoute les nouvelles
    constructor(taille, couleur, poids, fabricant, resolution, wifi, nombrePortHdmi, nombrePortUsb) {

        // super() récupère les propriétés de la classe Television
        super(taille, couleur, poids, fabricant);

        // Les nouvelles propriétés de Ecran
        this.resolution     = resolution;
        this.wifi           = wifi;
        this.nombrePortHdmi = nombrePortHdmi;
        this.nombrePortUsb  = nombrePortUsb;
    }

    // Méthode parler
    parler() {
        console.log("L'écran parle");
    }

    // Méthode reconnaitre une voix
    reconnaitre() {
        console.log("L'écran reconnait une voix");
    }

    // Méthode reveiller
    reveiller() {
        console.log("L'écran se réveille");
    }

    // Méthode eteindre automatiquement
    eteindre() {
        console.log("L'écran s'éteint automatiquement");
    }

}

// Je crée un écran et je le teste
let monEcran = new Ecran(65, "gris", 18, "LG", "4K", true, 3, 2);
console.log("Taille          : ", monEcran.taille);
console.log("Couleur         : ", monEcran.couleur);
console.log("Poids           : ", monEcran.poids);
console.log("Fabricant       : ", monEcran.fabricant);
console.log("Résolution      : ", monEcran.resolution);
console.log("Wifi            : ", monEcran.wifi);
console.log("Ports HDMI      : ", monEcran.nombrePortHdmi);
console.log("Ports USB       : ", monEcran.nombrePortUsb);

// Méthode héritée de Television
monEcran.allumer();

// Méthodes propres à Ecran
monEcran.parler(); 
monEcran.reconnaitre();
monEcran.reveiller();
monEcran.eteindre();

