const header = document.querySelector('header'); 
const section = document.querySelector('section');

let requestURL = 'https://raw.githubusercontent.com/sandrineparent/420-4C5-LL-BD-et-s-curit-des-applications/master/Film.json';

//Ouvertue de la requête
request = new XMLHttpRequest();
//Ouverture de la requête
request.open('Get', requestURL);
//Envoyer la requête sur el net
request.responseType ='json';
//Envoyer la requête au serveur
request.send();

request.onload = MaFonctionCallBack;

function MaFonctionCallBack(){
const Film = this.response // emmagasiner les données JSON dans une variable. La réponse est envoyée 
ConstruireEntete(Film); // Appel de la fonction qui va créer un entête et un paragraphe html
AfficherVedette(Film) // Appel de la fonction qui vas récupérer les éléments du tableau Vedette pour remplir notre page html
}

// Fonction pour construire l'entête de notre page    
function ConstruireEntete(jsonObj){
    const myH1 = document.createElement('h1'); //Créer un entête élément de type h1 (l'élément est créé mais non associer a notre page pour le moment)

    myH1.textConstent=jsonObj['Titre']; // Utiliser la valeur de la propriété JSON 'Titre' retourné par le serveur pour initialiser le texte de notre entête h1

    header.appendChild(myH1); // Assigner(associer) notre entête à l'entête de notre page HTML

    const myPara1 = document.createElement('p'); // Créer un élément de type paragraphe

    myPara1.textContent = 'Directeur: ' + jsonObj['directeur'] + '//Auteur: ' + jsonObj['Auteur']; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe

    header.appendChild(myPara1);
    const myPara2 = document.createElement('p'); // Créer un autre paragraphe pour la date

    myPara2.textContent= 'Date: ' + jsonObj['Date'];

    header.appendChild(myPara2);
    }


 // Fonction pour afficher les informations sur le film
 function AfficherVedette(jsonObj) {
    const Vedette = jsonObj['Vedette']; //Emmagasiner la valeur de la propriété JSON 'Vedette' dans la varaible tableau Vedette 
    // Récupérer les éléments du tableau Vedette pour remplir notre page html
    for (var i = 0; i < Vedette.length; i++)
    { 
      const myArticle = document.createElement('article');// Pour chaque vedette, créer un article ('article'), une entête h2 ('h2'), 1 paragraphe ('p')
      const Nom = document.createElement('article'); 
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      myH2.textContent = Vedette[i].Nom; // Utiliser la valeur de la propriété JSON 'Nom' retourné par le serveur pour initialiser le texte de notre entête h2
      myPara1.textContent = 'Personnage: ' + Vedette[i].Personnage; // Utiliser la valeur de la propriété JSON 'Personnage' retourné par le serveur pour initialiser le paragraphe
    
      // Assigner(associer) l'entête myH2 et le paragraphes myPara1 à l'article myArticle
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      
      section.appendChild(myArticle); // Associer notre article a notre section de la page HTML
    }

 }
