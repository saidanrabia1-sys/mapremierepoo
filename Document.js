/**
 * Je déclare ma classe Document .
 * Je commence par le mot-clé class suivi du nom de me classe Document .
 * Le nom de la classe doit obligatoirement commencer par une lettre MAJUSCULE .
 */

class Document {
    // Je déclare le constructeur de la classe Document
    constructor(titre, nombrePage, auteur){
        // Je déclare mes propriétés de dans le construteur
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;

        
    }

    // Je déclare les méthodes 
    description() {
            console.log(" Le titre du document est ", this.titre);
            console.log(" L'auteur est ", this.auteur);
            console.log(" Le nombre de pages est ", this.nombrePage);
        }

}

// Je crée plusieurs instances de l'objet Document
let document1 = new Document("Introduction au HTML 5", 234, "Anrabia SAID");

document1.description();