
// Exo 1 : Affichage date jolie

var date = new Date();
const tab_jour = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
idxjour=date.getDay();

console.log("Aujourd'hui, nous somme " + tab_jour[idxjour] + " et il est " + date.getHours() + "h" + date.getMinutes() + "m" + date.getSeconds() +"s")



// Exo 2 : Itération de 1 à 100 + condition
for(var i = 1; i<=100; i++){
    if(i%3==0 && i%5 ==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


// exo 3 Tableau de notes et traitement

var students_grade = [[nom="Jean-Michel",grade=6],[nom="Jean-Philippe",grade=12],[nom="Jean-Sébastien",grade=18],[nom="Jean-Marie",grade=3],[nom="Jean-Pierre",grade=15],[nom="Jean-Kevin",grade=20],[nom="Jean-Jean",grade=9]];

// var students_grade = [["Jean-Michel",6],["Jean-Philippe",12],["Jean-Sébastien",18],["Jean-Marie",3],["Jean-Pierre",15],["Jean-Kevin",20],[nom="Jean-Jean",grade=9]];

// var max = Math.max.apply(null, students_grade.map(function(item){
//     return item["grade"];
// }))
// console.log(max);

function display_table(tab){
    console.log("Nom et note");
    for(var i=0; i< tab.length; i++){
        console.log( tab[i][0] + " : " + tab[i][1]);
    }
}

display_table(students_grade);

function how_many_got_10(tab){
    var compteur=0;
    for(var i=0; i<tab.length; i++){
        if (tab[i][1]>=10){
            compteur += 1
        }
    }
    console.log(compteur + " eleves ont eu la moyenne");
}

how_many_got_10(students_grade);

function moyenne_classe(tab){
    var sum = 0;
    for(var i=0; i<tab.length; i++){
        sum += tab[i][1];
    }
    var mean = sum/(tab.length);
    console.log("La moyenne de la classe est de " + mean);
}

moyenne_classe(students_grade);

function what_is_max_grade(tab){
    var grades =[];
    for(var i=0; i<tab.length; i++){
        grades[i]=tab[i][1];
    }
    var maximum = Math.max(...grades);
    console.log(maximum);
 
}

what_is_max_grade(students_grade);


function search_grade(tab,grade){   
    var grades =[];
    for(var i=0; i<tab.length; i++){
        grades[i]=tab[i][1];
    }
    var grade_found = grades.find(element => element === grade);

    var idx=grades.indexOf(grade);

    if(idx >=0){
        console.log(tab[idx][0]+ " a eu " + grade);
    }
    else{
        console.log("Personne n'a eu cette note");
    }
}

search_grade(students_grade,0);