class User {
    constructor(nom, prenom, email, mdp, optIn, interets, pays) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.mdp = mdp;
        this.optIn = optIn;
        this.interets = interets;
        this.pays = pays;
    }
};

function ajoutUser () {
    const formInscription = document.getElementById("form_inscription");
    if(!formInscription) return; // arrêter l'exécution de la fonction en cas d'absence de formulaire

    formInscription.addEventListener("submit", function (event) {
        event.preventDefault();    

        //1.    Récupérer les valeurs
        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        let email = document.getElementById("email").value;
        let mdp = document.getElementById("mdp").value;

        
        
        //1.1   Récupérer une valeur bouton radio (une seule valeur retournée)
        let optIn = document.querySelector('input[name=opt-in]:checked').value;
        console.log(optIn);

        //1.2   Récupérer une valeur checkbox (plusieurs valeurs retournées)
        let interets = [];
        let checkedInterets = document.querySelectorAll('input[name=interests]:checked'); // Attention, pas de value sur une NodeList

        for(let i=0; i<checkedInterets.length; i++) {
            interets.push (checkedInterets[i].value);
        }

        let pays = document.getElementById("pays").value;

        //2.    Création de l'utilisateur
        let user = new User (nom, prenom, email, mdp, optIn, interets, pays);
        console.log(user);

        //3.    Récupération de la liste d'utilisateurs depuis le localStorage
        const users = JSON.parse(localStorage.getItem("userList")) || [];

        //4.    Ajout de l'utilisateur créé
        users.push(user);

        //5.    Stockage de la liste dans localStorage
        localStorage.setItem("userList", JSON.stringify(users));

        formInscription.reset();

        console.log(users);

    })
    
}

function logIn() {
    const formLogIn = document.getElementById("log_in");
    if(!formLogIn) return;

    console.log(formLogIn);

    formLogIn.addEventListener("submit", function(event) {
        event.preventDefault();

        let identifiant = document.getElementById("login").value;
        let password = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("userList")) || [];

        /*Méthode perso

        for(let i = 0; i<users.length; i++) {
            if(users[i].email === identifiant && users[i].mdp === password) {
                alert("Connexion réussie");
                window.location.href = "../index.html"; // redirige l'utilisateur connecté à l'accueil
                return;
            }
            else if (i === users.length-1) {
                alert("Identifiants incorrects");
            }
        }
        */

        /*Méthode correction*/

        const utilisateurConnecte = users.find((user) => {
            return user.email === identifiant && user.mdp === password
        });

        if(utilisateurConnecte) {
            window.location.href = "../index.html"; // redirige l'utilisateur connecté à l'accueil
        } 
        else {
            alert("Identifiants incorrects");
        }

    })
}

ajoutUser();
logIn();


