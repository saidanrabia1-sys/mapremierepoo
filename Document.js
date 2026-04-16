// ================================
// Définition de la classe Document
// ================================
class Document {
    // Le constructeur initialise les propriétés de chaque instance
    constructor(titre, nombrePage, auteur) {
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
    }

    // Affiche toutes les infos du document dans la console
    description() {
        console.log("Le titre du document est ", this.titre);
        console.log("L'auteur est ", this.auteur);
        console.log("Le nombre de pages est ", this.nombrePage);
    }

    // Getter : retourne ET affiche le titre
    getTitre() {
        console.log("Le titre est : ", this.titre);
        return this.titre;
    }

    // Getter : retourne l'auteur
    getAuteur() {
        return this.auteur;
    }

    // Getter : retourne le nombre de pages
    getNombrePage() {
        return this.nombrePage;
    }

    // Setter : modifie le titre avec un log avant/après
    setTitre(nouveauTitre) {
        console.log("Titre avant modification : ", this.titre);
        this.titre = nouveauTitre;
        console.log("Titre après modification : ", this.titre);
    }

    // Setter : modifie l'auteur avec un log avant/après
    setAuteur(nouvelAuteur) {
        console.log("Auteur avant modification : ", this.auteur);
        this.auteur = nouvelAuteur;
      
        console.log("Auteur après modification : ", this.auteur);
    }

} // fin de la classe Document

// ================================
// Création des instances de Document
// ================================
let document1          = new Document("Introduction au HTML 5",  234, "Anrabia SAID");
let documentCss        = new Document("Apprendre le CSS",         67, "Alma SAID");
let documentJavascript = new Document("Mon premier JavaScript",  187, "Roukaya SAID");

// Appel de description() sur chaque instance
document1.description();
documentCss.description();
documentJavascript.description();

// getTitre() affiche ET retourne le titre
documentCss.getTitre();

// On stocke le titre retourné dans une variable
let titreDocumentCss      = documentCss.getTitre();
console.log("titreDocumentCss: ", titreDocumentCss);

// On stocke l'auteur retourné dans une variable
let auteurDocumentCss     = documentCss.getAuteur();
console.log("auteurDocumentCss: ", auteurDocumentCss);

// On stocke le nombre de pages retourné dans une variable
let nombrePageDocumentCss = documentCss.getNombrePage();
console.log("nombrePageDocumentCss: ", nombrePageDocumentCss);

// Modification du titre de document1 via le setter
document1.setTitre("Apprendre HTML 5");

// Modification du auteur de document1 via le setter
document1.setAuteur("Apprendre HTML 5");

// ================================
// Extension de la classe Document
// ================================

// Livret hérite de Document grâce au mot-clé "extends"
class Livret extends Document {

    // Le constructeur de Livret ajoute une propriété maisonEdition
    constructor(titre, nombrePage, auteur, maisonEdition) {
        // super() appelle le constructeur de la classe parente (Document)
        super(titre, nombrePage, auteur);
        this.maisonEdition = maisonEdition;
    }

    // Méthode propre à Livret, absente de la classe Document
    convertirPdf() {
        console.log("**** je convertis le livret en PDF.");
    }
}

// Création d'une instance de Livret
let livret = new Livret(
    "Le petit prince",
    5,
    "Antoine de Saint-Exupéry",
    "Éditions de l'Archipel"
);

// Les méthodes héritées de Document sont disponibles sur livret
console.log(livret.getTitre());
console.log(livret.getAuteur());
console.log("Nombre de pages : ", livret.getNombrePage());

// Méthode spécifique à Livret
livret.convertirPdf();

