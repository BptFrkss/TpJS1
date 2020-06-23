
// document.write("Premier JS");

// document.write("<br>");
// Temp=57;


// Temp_thr = 40

// if(Temp >= Temp_thr) {
//     document.write("La temperature est superieur à 40°")
// }
// else{
//     document.write("La temperature est inferieure à 40°")
// 

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


document.write('<table border="1">')
document.write('<th>',"Student Name",'<th>',"Marks");
for(var i=0; i<students.length; i++){
    document.write('<tr>','<td>',students[i][0],'<td>',students[i][1]);
}
document.write('</table>')
document.write('<br>','<br>',"Moyenne générale:" + (avgMarks/(students.length)),'<br>',"Grade :" + grade)





