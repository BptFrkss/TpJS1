// Exercice 1 : Test ecriture

document.write(5,'<br>');
document.write("Ceci est une phrase",'<br>');
x=18
document.write(x,'<br>');
document.write(Math.PI,'<br>');
document.write(Math.floor(Math.random()*100+1),'<br>')

// Exercice 1 : Test comparaison

T_threshold = 40;

function Test_Temperature(){
    var temp = document.getElementById('TempInput').value;
    if (temp>= T_threshold){
        document.write('<br>',"C'est la canicule!",'<br>')
    }
    else{
        document.write('<br>',"Il fait moins de 40°C, c'est supportable",'<br>')
    }
}

// Exercice 1: For et While
for (var i=0; i<=100; i++){
    console.log(i);
} 

var i=0
while (i<=100){
    console.log(i);
    i++
}

// Exercice 1 : Figures géométriques


// Exercice 2 : Somme et produit
var tableau_entier = [42,37,87,21,6,65];

// Fonction somme
function somme(tab){
    var result = 0;
    for (i=0; i<tab.length;i++){
        result += tab[i];
    }
    return result
}

console.log(somme(tableau_entier));

// Fonction produit
function produit(tab){
    var result = 1;
    for (i=0; i<tab.length;i++){
        result = result * tab[i];
    }
    return result
}

console.log(produit(tableau_entier));


// Exercice 3 : Test parité

for(var i=0; i<=15; i++){
    if(i%2==0){
        console.log(i + " est pair")
    }
    else{
        console.log(i + " est impair")
    }
}

// Exercice 4 : tableau de notes

var students = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas",68 ]];

var avgMarks = 0;

for(var i=0; i<students.length; i++){
    avgMarks += students[i][1];
    var avg = avgMarks/(students.length);
    console.log(students [i][0])
}

console.log("Moyenne :" + (avgMarks/(students.length)));

if (avg < 60){
    var grade = "F";
} 
else if(avg<70){
    var grade = "D";
}
else if(avg<80){
    var grade = "C";
}
else if(avg<90){
    var grade = "B";
}
else if(avg<100){
    var grade = "A";
}

console.log("Grade :" + grade)


document.write('<br>','<table border="1">')
document.write('<th>',"Student Name",'<th>',"Marks");
for(var i=0; i<students.length; i++){
    document.write('<tr>','<td>',students[i][0],'<td>',students[i][1]);
}
document.write('</table>')
document.write('<br>','<br>',"Moyenne générale:" + (avgMarks/(students.length)),'<br>',"Grade :" + grade)



// Exercice 5 : Loto

document.write('<br>','<br>','<br>','<br>');

var tab_participants =new Array();

function addUser(){
    var name = document.getElementById('myInput').value;
    console.log(name);
    tab_participants.push(name)
    console.log(tab_participants);
}


function tirageAuSort(){
   idx = (Math.floor(Math.random()* (tab_participants.length-1)+1));
   console.log(tab_participants[idx]);
}




