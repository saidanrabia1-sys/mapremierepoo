class Document {
    constructor(titre, nombrePage, auteur) {
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
    }

    description() {
        console.log("Le titre du document est ", this.titre);
        console.log("L'auteur est ", this.auteur);
        console.log("Le nombre de pages est ", this.nombrePage);
    }

    getTitre() {
        console.log("Le titre est : ", this.titre);
        return this.titre;
    }

    // ✅ Méthode ajoutée
    getAuteur() {
        return this.auteur;
    }

    // ✅ Méthode ajoutée
    getNombrePage() {
        return this.nombrePage;
    }
}

// Instances de Document
let document1          = new Document("Introduction au HTML 5",   234, "Anrabia SAID");
let documentCss        = new Document("Apprendre le CSS",          67, "Alma SAID");
let documentJavascript = new Document("Mon premier JavaScript",   187, "Roukaya SAID");

document1.description();
documentCss.description();
documentJavascript.description();

documentCss.getTitre();

let titreDocumentCss      = documentCss.getTitre();
console.log("titreDocumentCss: ", titreDocumentCss);

let auteurDocumentCss     = documentCss.getAuteur();
console.log("auteurDocumentCss: ", auteurDocumentCss);

let nombrePageDocumentCss = documentCss.getNombrePage();
console.log("nombrePageDocumentCss: ", nombrePageDocumentCss);

// ================================
// Classe enfant : Livret
// ================================
class Livret extends Document {
    // ✅ maisonEdition ajouté en 4ème paramètre
    constructor(titre, nombrePage, auteur, maisonEdition) {
        super(titre, nombrePage, auteur); // ✅ supeur → super
        this.maisonEdition = maisonEdition;
    }

    // Méthode spécifique à Livret
    convertirPdf() {
        console.log("**** je convertis le livret en PDF.");
    }
}

let livret = new Livret(
    "Le petit prince",
    5,
    "Antoine de Saint-Exupéry",
    "Éditions de l'Archipel"
);

console.log(livret.getTitre());
console.log(livret.getAuteur());
console.log("Nombre de pages : ", livret.getNombrePage());

livret.convertirPdf(); // ✅ Méthode propre à Livret, non héritée de Document 