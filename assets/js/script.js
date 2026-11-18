/*console.log("Hello from script.js");

let prenom = "Kevin";
let age = 39;

console.log (prenom);
console.log(age);

let nom = "SCHEPENS";

const PI = 3.14159;

let nomComplet = prenom + " " + nom;
console.log(nomComplet);

let test = `Je m'appelle ${nomComplet} et j'ai ${age} ans`;
console.log(test)

console.log("PI vaut", PI);*/

/*

//TP1 Exo 1

let prenom = "Kevin";
let age = 39;
let ville = "Pont-Audemer";

let message = `Je m'appelle ${prenom}, j'ai ${age} et j'habite à ${ville}.`

console.log(message);


//TP1 Exo 2

let a = 5;
let b = 7;

console.log(a+b);

//la console affiche le résultat de l'opération a + b, probablement parce que les deux variables sont de même type, ce qui permet d'utiliser l'opérateur + entre eux


//TP1 Exo 3

let prenom_TP3 = prompt("Quel est votre prénom ?");
alert("Bienvenue, " + prenom_TP3 + " !!!");


//TP1 Exo 4

let nombre_TP4 = prompt("Indiquez un nombre : ");
if(nombre_TP4%2 === 0)
    {console.log(nombre_TP4%2 === 0);alert("Ce nombre est pair");}
else 
    {console.log(nombre_TP4%2 === 0);alert("Ce nombre est impair");}


//TP1 Exo 5 

let choixUser_TP5 = confirm("Voulez-vous continuer ?");
alert("Choix de l'utilisateur : " + choixUser_TP5);

*/

/*

//TP 2 EXO 1

let age = prompt ("Quel est votre âge ?")
if (age >= 18)
    {alert("Majeur")}
else
    {alert("Mineur")}
let prix = prompt("Quel est le prix de l'article ?")
if (prix < 100)
    {alert("TVA à 20% : prix = " + prix*1.20);}
else
    {alert("TVA à 5% : prix = " + prix*1.05);}


//TP 2 EXO 2

let prenom = prompt("Quel est votre prénom ?")
let note = prompt("Quelle est votre note sur 20 ?");
if (note > 20)
    {alert("Note invalide");}
else if (note >= 16)
    {alert("Très bien\nFélicitations, " + prenom);}
else if (note >= 14)
    {alert("Bien\nBelle performance, " + prenom);}
else if (note >= 12)
    {alert("Assez bien\n" + prenom + " peut mieux faire");}
else if (note >= 10)
    {alert("Passable\nC'est le minimum pour être admis, " + prenom);}
else 
    {alert("Insuffisant\nVous devez travailler davantage, " + prenom);}


//TP 2 EXO 3

let boisson = Number(prompt("Choisissez votre boisson : 1. café ; 2. thé ; 3. jus"));
switch (boisson)
{
    case 1:
        alert("Voici votre café");
        break;
    case 2:
        alert("Voici votre thé");
        break;
    case 3:
        alert("Voici votre jus");
        break;
    default:
        alert("Choix non disponible");
        break;
}


//TP 2 EXO 4

let mois = Number(prompt("Indiquer un numéro de mois"));
switch (mois)
{
    case 1:
        alert("Janvier (31 jours)");
        break;
    case 2:
        alert("Février (28 jours)");
        break;
    case 3:
        alert("Mars (31 jours)");
        break;
    case 4:
        alert("Avril (30 jours)");
        break;
    case 5:
        alert("Mai (31 jours)");
        break;
    case 6:
        alert("Juin (30 jours)");
        break;
    case 7:
        alert("Juillet (31 jours)");
        break;
    case 8:
        alert("Août (31 jours)");
        break;
    case 9:
        alert("Septembre (30 jours)");
        break;
    case 10:
        alert("Octobre (31 jours)");
        break;
    case 11:
        alert("Novembre (30 jours)");
        break;
    case 12:
        alert("Décembre (31 jours)");
        break;
    default: 
        alert("Choix invalide");
        break;
}


// TP3 EXO 1

let resultat = 0;
for (let i = 1; i <= 10; i++)
    {console.log(resultat += i);}


// TP3 EXO 2

let nombre = Number(prompt("Indiquez un nombre : "));
let resultat = 1;
for(let i = 1; i<=nombre; i++)
    {console.log(resultat *= i);}


// TP3 EXO 3

for (let i = 1; i <= 30; i++) {
    
    if (i%3 == 0 && i%5 == 0)
        {console.log("FizzBuzz");}
    else if(i%3 == 0)
        {console.log("Fizz");}
    else if(i%5 == 0)
        {console.log("Buzz");}
    else
        {console.log(i);}
}


// TP3 EXO 4

let nb_secret = 4;
let proposition = 0;
let coups = 0;
while (proposition != nb_secret) {
    coups++;
    proposition = Number(prompt("Proposez un chiffre entre 1 et 5)"));
    if (proposition == nb_secret)
        {alert("Trouvé en " + coups + " coups");}
}


// TP3 EXO 5

let nombre = 0;
let resultat = 0;
let continuer = true;
do {
    nombre = Number(prompt("Indiquer un nombre"));
    if (resultat == 0)
        {resultat += nombre; 
        alert("Résultat : " + resultat);}
    else
        {resultat += nombre;
        alert(nombre + " + " + (resultat-nombre) + " = " + resultat);}
    
    continuer = confirm("Ajouter un nombre ?");

}while (continuer);


// TP3 EXO 6
let nombre_item = Number(prompt("Indiquer le nombre d'articles achetés"));
let prix_panier = 0;

while (nombre_item < 1)
    {alert("Nombre d'article invalide (ne peut pas être inférieur à 1)");
    nombre_item = Number(prompt("Indiquer le nombre d'articles achetés"));
    }

for (let i = 1; i<=nombre_item; i++) {
    prix_panier += Number(prompt("Indiquer le prix de l'article " + i));
}

if (prix_panier >= 200)
    {alert("Quelle commande ! Pour vous remercier, nous vous proposons une remise immédiate de 10% sur l'ensemble de votre panier (c'est cadeau :))\n\nLe prix de votre commande passe de " + prix_panier + " DT à " + (prix_panier*0.90 + (" DT")));
    prix_panier = prix_panier * 0.90;
    }

alert ("Passer au paiement de votre commande : " + prix_panier + " DT");

*/

//Functions
/*
function direBonjour() {
    console.log("Bonjour à tous depuis la console !");
}

direBonjour();

function bonjourPerso(nom) {
    alert("Bonjour " + nom + " !");
}

let nom = prompt("Quel est ton nom ?");
bonjourPerso(nom);
*/

/*
let tableauNoms = ["Islem", "Skander", "Marion"];
console.log(tableauNoms);
console.log(tableauNoms[0] + " : 1er élément du tableau");
*/

/*

//TP4 EXO 1

function bonjourPerso(nom) {
    alert("Bonjour " + nom + " !");
}

let nom = prompt("Quel est ton nom ?");
bonjourPerso(nom);


//TP4 EXO 2

function somme(a, b) {
    return a+b;
}

let a = Number(prompt("Entrez un 1er nombre"));
let b = Number(prompt("Entrez un 2eme nombre"));

alert("La somme de " + a + " et " + b + " est " + somme(a, b));


//TP4 EXO 3

function carre(a) {
    return a * a;
}

let c = Number(prompt("Entrez un nombre"));
alert("Le carré de " + c + " est " + carre(c));


//TP4 EXO 4

let serieNombre1 = [10, 20, 30, 40];
alert("Le premier élément de ce tableau est " + serieNombre1[0]);
alert("Le dernier élément de ce tableau est " + serieNombre1[3]);
alert("Le deuxième élément de ce tableau est " + serieNombre1[1]);


//TP4 EXO 5
let serieCourses = ["pain", "lait", "oeufs"];
serieCourses.push("fromage");
serieCourses.unshift("beurre");
serieCourses.splice(2,1); // supprime 1 élément à partir de l'index 2
serieCourses.splice(2,1,"élément"); // remplace 1 élement indiqué à l'index 2 par un autre élément 
serieCourses.splice(2,0,"élément"); // ajoute un élément après l'élément 2 sans supprimer
serieCourses[2] = "yaourts";
console.log(serieCourses);



// TP5

function addUser(array, nom) {
    array.push(nom)
}

function checkUser(array, nom) {
    let trouve = false;

    for(let i = 0; i<array.length; i++) {
        if (array[i] === nom) {
            trouve = true;
        }
    }

    return trouve;
}

let users = [];
users.push("Islem");
users.push("Skander");
users.push("Marion");
users.push("Ydnar");
users.push("Jordan");

console.log(users);

addUser(users, "Bobby");

console.log(users);

for (let i = 0; i<users.length; i++) {
    console.log(users[i]);
}

    if(checkUser(users, prompt("Quel utilisateur recherchez-vous ?"))) {
        alert("Utilisateur trouvé");
    }

    else {
        alert("Utilisateur non trouvé");
    }

for (let i = 0; i<users.length; i++) {
    if (users[i].indexOf("a") != -1) {
        console.log(users[i]);
    }
}

if(users.length === 0) {
    console.log("Aucun utilisateur");
}

else {
    console.log("Nombre d'utilisateurs : " + users.length);
}

*/

/*
const products = document.getElementsByClassName('products_container');
console.log(products);
console.log(products[0]);

const articles = document.getElementsByTagName('article');
console.log(articles);

const queryArticles = document.querySelector('article');
console.log(queryArticles);

const item = document.getElementById('test');
//modifier le contenu texte de l'élément
item.textContent = "Nouveautés sur notre site de vente en ligne !!!";
//injecter du code HTML
item.innerHTML = "<strong>Nouveautés</strong> sur notre site de vente en ligne !!!"
//modifier le style de l'élément
item.style.color ="purple";
item.style.fontSize = "40px";
item.style.backgroundColor = "red";
*/

/*
// TP6 Exo1

const mainIndex = document.getElementById('main_index');
mainIndex.style.backgroundColor = "rgb(191,191,191)";
mainIndex.style.borderWidth ="1px";
mainIndex.style.borderStyle = "solid";
mainIndex.style.borderRadius = "10px";

//mainIndex.style.border = "1px solid black"; fonctionne aussi

// TP6 Exo2
const titreProduits = document.querySelectorAll('article h3');
for(let i = 0; i<titreProduits.length; i++) {
    titreProduits[i].style.color = "purple";
    titreProduits[i].textContent = titreProduits[i].textContent.toUpperCase();
}

// TP6 Exo3
const boutonProduits = document.querySelectorAll('article button');
for (let i = 0; i<boutonProduits.length; i++) {
    boutonProduits[i].textContent = "Ajouter au panier";
    boutonProduits[i].style.backgroundColor = "cyan";
    boutonProduits[i].style.color = "black";
    
    // TP6 Exo4

    boutonProduits[i].addEventListener("click", function() {
        boutonProduits[i].style.backgroundColor = "blue";
        boutonProduits[i].style.color = "white";
    })
}
*/
/*

// TP6 Exo5 -> tentative perso
const prixProduits = document.querySelectorAll('.prix_produits');
for (let i = 0; i<prixProduits.length; i++) {
    const texte = prixProduits[i].textContent;
    const regex = /-?\d+(\.\d+)?/;
    const match = texte.match(regex);
    if (match) {
        const prix = parseFloat(match[0]); 
        if (prix <= 500) {
            prixProduits[i].style.color = "green";
        }
        else if (prix > 500 && prix <= 900) {
            prixProduits[i].style.color = "orange";
        }
        else {
            prixProduits[i].style.color = "red";
        }
    } 
}

// TP6 Exo6 -> tentative perso
const listeProduits = document.querySelectorAll('.prix_produits');
for (let i = 0; i<listeProduits.length; i++) {
    const texte = listeProduits[i].textContent;
    const regex = /-?\d+(\.\d+)?/;
    const match = texte.match(regex);
    let prix = 0;
    if (match) {
        prix = parseFloat(match[0]);
    }

    const parent = listeProduits[i].parentElement;
    
    if (prix > 900) {
        ajout = document.createElement('p');
        ajout.textContent = "Top Produit !";
        ajout.classList.add('badge_top_produit');
        // ajout de propriété CSS pour la mise en forme

        parent.prepend(ajout);
    }

    else if (prix < 500) {
        ajout = document.createElement('p');
        ajout.textContent = "Bonne affaire";
        ajout.classList.add('badge_bonne_affaire');
        // ajout de propriété CSS pour la mise en forme

        parent.prepend(ajout);
    }
    
}
*/


// TP6 Exo5 -> correction
let prixProduits = document.querySelectorAll('.prix_produits');

prixProduits.forEach((prix) => {
    let textePrix = prix.innerText;
    //1ère méthode : utiliser replace pour remplacer les expressions littérales
    //let montant = Number(textePrix.replace("Prix :", "").replace("€","").trim());
    //2ème méthode : utiliser les expressions régulières (RegExp)
    let montant = Number(textePrix.replace(/[^\d.]/g,""));
    console.log(montant);

    if (montant <= 200) {
        prix.style.color = "green";
    } else if (montant > 200 && montant <= 750) {
        prix.style.color = "orange";
    } else {
        prix.style.color = "red";
    }
})

// TP6 Exo6 -> pas de correction cause pas de code CSS, ydnar avait un bon code
