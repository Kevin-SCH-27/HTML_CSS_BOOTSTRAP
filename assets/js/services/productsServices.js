//Cette constante contient la destination du backend (ici, json-server)
const API_URL = "http://localhost:3000/produits";

export async function ajouterProduitAPI(produit) {
    const reponse = await fetch(API_URL, {

        //Action (CRUD)
        method: "POST", 

        // Indication du format des données envoyées (ici, sous forme de JSON)
        headers: {
            "content-type": "application/json"
        },

        // Ajouter l'objet qu'on va récupérer dans le corps de la requête et transformation (stringify)
        body: JSON.stringify(produit)
    });

    if(!reponse.ok) {
        throw new Error("Erreur lors de l'ajout du produit");
    }

    return await reponse.json();
}