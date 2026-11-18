const boutonScroll = document.querySelector('.scroll_up');
console.log(boutonScroll);

if (boutonScroll) {
    boutonScroll.addEventListener("click", function() {
        window.scrollTo({ // les accolades peuvent permettre de mattre plusieurs propriétés
            top: 0, // virgule pour séparer les propriétés
            behavior: "smooth" // attention, pas de ; pour finir la ligne
        })
    })
}


//fonction pour afficher les produits via JS
function afficherProduit() {
    const container = document.querySelector('.products_container'); // élection du container où sont affichés tous les produits
    console.log(container);

    // ATTENTION À LA SYNTAXE : 
    // sur un objet seul, virgule entre les propiétés, point virgule après l'accolade
    // sur un tableau d'objets, virgule entre les propriétés et les objets, point virgule après les crochets
    

    //Création d'un objet, structure du produit (équivalent structures C)
    // let produit1 = {
    //     nom: "nomDuProduit from JS", 
    //     description:"Description du produit", 
    //     prix:0, 
    //     imgURL:"../assets/images/tour_gamer.webp"
    //};


    // création de plusieurs objets (tableaux d'objets)
    let produits = JSON.parse (localStorage.getItem("listeProduits")) || [];

    /*
    container.innerHTML = `
        <article class="products_container">
            <h3>${produit1.nom}</h3>
            <img src=${produit1.imgURL} alt=${produit1.nom}>
            <h4>${produit1.description}</h4>
            <p class="price">Prix : ${produit1.prix} €</p>
            <button type="button">Acheter</button>
        </article>
    `
    */

    /* 1ERE METHODE : TOUT EFFACER ET RÉINJECTER (lourd)
    Pour afficher la liste de produit, il faut d'abord créer une chaîne vide dans le container avec 
    container.innerHTML, puis on concatènera les produits 1 par 1 avec forEach et +=
    */

    /*
    container.innerHTML = "";
    produits.forEach((produit) => {
        container.innerHTML += `
            <article class="products_container">
                <h3>${produit.nom}</h3>
                <img src=${produit.imgURL} alt=${produit.nom}>
                <h4>${produit.description}</h4>
                <p class="price">Prix : ${produit.prix} €</p>
                <button type="button">Acheter</button>
            </article>
        `
    });
    */

    /* 2EME METHODE : CREER UN ELEMENT POUR CHAQUE PRODUIT A INSERER
    similaire mais n'écrase pas le contenu déjà affiché, utilise createElement et appendChild
    l'avantage est qu'en écrasant pas le contenu, on n'écrase pas non plus les évènements associés
    */

    
    if (container && produits) {
        produits.forEach((produit) => {
        const article = document.createElement("article");
        //ajouter la classe pour le CSS
        article.classList.add("products_container");

        article.innerHTML = `
            <h3>${produit.nom}</h3>
            <img src=${produit.imgURL} alt=${produit.nom}>
            <h4>${produit.description}</h4>
            <p class="price">Prix : ${produit.prix} €</p>
            <button type="button">Acheter</button>
        `;

        container.appendChild(article);
        })
    }

    else {
        console.log(container, produits);
    }
}

afficherProduit();


