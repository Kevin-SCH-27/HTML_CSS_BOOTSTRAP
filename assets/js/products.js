import { ajouterProduitAPI } from "./services/productsServices.js";

//Création de la classe Produit avec le constructeur intégré
class Produit {
    constructor (nom, description, prix, imgURL) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.imgURL = imgURL;
    }
}

// Appel du constructeur
// const produit1 = new Produit ("Laptop Gamer", "Jouez où vous voulez avec les meilleures performances", 949.99, "url");
// console.log(produit1);

function ajoutProduit() {
    
    const form = document.getElementById('formProduct');
    
    if(form) {
        form.addEventListener("submit", async function(event) {
        event.preventDefault(); // annuler le comportement automatiquement de l'évènement
        
        //1. Récupérer les valeurs du formulaire
        let nom = document.getElementById('nom_produit').value;
        let description = document.getElementById('description_produit').value;
        let prix = document.getElementById('prix_produit').value;
        let imgURL = document.getElementById('image_produit').value;

        //2. Appeler le constructeur pour créer l'objet stockant les valeurs du produit à ajouter
        let produit = new Produit(nom, description, prix, imgURL);
        console.log(produit);

        /* Méthode pour LOCALSTORAGE

        //3. Sauvegarder dans localStorage

        //3.1.  Créer une liste de produits avec getItem (qui renvoie une chaîne, d'où le JSON.parse pour le transformer en objet)
        //      ou un tableau vide si rien n'est stocké dans le localStorage (|| -> ou, et [] -> tableau vide)
        const produits = JSON.parse(localStorage.getItem("listeProduits")) || [];

        //3.2   Ajouter le produit créé  la liste
        produits.push(produit);

        //3.3.  Sauvegarder la liste dans le LOcalStorage (le mot clé se définit à l'appel de la fonction, 
        //      la liste doit être converti en chaîne, d'où le JSON.stringify)
        localStorage.setItem("listeProduits", JSON.stringify(produits));

        //3.4.  Facultatif : réinitialiser le formulaire d'ajout de produit
        form.reset();

        console.log ("Liste produits :", produits);

        //alert("Produit ajouté !");

        */

        /* Méthode pour JOSN-SERVER */

        try {
            const nouveauProduit = await ajouterProduitAPI(produit);
            console.log(nouveauProduit);
            form.reset();
            alert("Produit ajouté !");

        } catch(error) {
            console.log(error);
            alert("Erreur lors de l'ajout du produit");
        }

        });
    }
}

ajoutProduit();