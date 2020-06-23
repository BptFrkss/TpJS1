// Inro jouer avec les objets

var student =  {
    name : "David Rayy",
    class : "VI",
    rollno : 12  };

function clone(obj){
    var obj2 = {};
    for (key in obj)
    obj2[key] = obj[key];
    return obj2;
    }

var student2 = clone(student);

student2.name="John Wick"
console.log(student);
console.log(student2);

delete student2.rollno;
console.log(student2);

// Exo recettes cuisine

var recette = function(nomRecette, nbService, ingredients){
    this.nomRecette = nomRecette;
    this.nbService=nbService;
    this.ingredients=ingredients;
}

recette_socca = new recette("Socca", 2, ["Pois-chiches","Soleil","Poivre"]);


console.log("Nom : " + recette_socca.nomRecette);
console.log("Services : " + recette_socca.nbService);
console.log("Ingrédients :")
console.log(recette_socca.ingredients[0]);
console.log(recette_socca.ingredients[1]);
console.log(recette_socca.ingredients[2]);

// Exo bouquinons

var livre = function(titre, nom_auteur, etat_lecture){
    this.titre=titre;
    this.nom_auteur=nom_auteur;
    this.etat_lecture=etat_lecture;
}

livre1= new livre("Dune", "Franck Herbert", true);
livre2= new livre("Les hauts de Hurlevent", "Emily Brontë", true);
livre3= new livre("Jane Eyre", "Charlotte Brontë",false);

function etat_livre(livre){
    if (livre.etat_lecture){
        console.log("J'ai lu " + livre.titre + ' de '+ livre.nom_auteur);
    }
    else{
        console.log("Je n'ai pas lu " + livre.titre + ' de '+ livre.nom_auteur);
    }
}

etat_livre(livre3);