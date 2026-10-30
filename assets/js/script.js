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


