function maFonction() {
    console.log("Hello World !");
}

function maFonction2(x,y){
    if (x>=y)
        {console.log(x);}
     else
        {console.log(y);}
}

function check(){
    var nbr1, nbr2;
    nbr1 = Number(document.getElementById("myInput1").value);
    nbr2 = Number(document.getElementById("myInput2").value);
    
    if (nbr1>nbr2)
        {
            alert(nbr1 + " est plus grand que " + nbr2);
        }
    else if (nbr2 > nbr1)
        {
            alert(nbr2 + " est plus grand que " + nbr1);
        }
    else
        {
            alert(nbr2 + " est égal à " + nbr1);
        }
}

function check2(){
    var nbr1, nbr2;
    nbr1 = Number(document.getElementById("myInput1").value);
    nbr2 = Number(document.getElementById("myInput2").value);
    nbr3 = Number(document.getElementById("myInput3").value);
    nbr4 = Number(document.getElementById("myInput4").value);
    nbr5 = Number(document.getElementById("myInput5").value);

    if (nbr1>=nbr2 && nbr1 >= nbr3 && nbr1>=nbr4 && nbr1 >= nbr5)
    {
        alert("le max est :" + nbr1);
    }
    else if (nbr2>=nbr1 && nbr2 >= nbr3 && nbr2>=nbr4 && nbr2 >= nbr5)
    {
        alert("le max est :" + nbr2);
    }
    else if (nbr3>=nbr1 && nbr3 >= nbr2 && nbr3>=nbr4 && nbr3 >= nbr5)
    {
        alert("le max est :" + nbr3);
    }
    else if (nbr4>=nbr1 && nbr4 >= nbr2 && nbr4>=nbr3 && nbr4 >= nbr5)
    {
        alert("le max est :" + nbr4);
    }
    else if (nbr5>=nbr1 && nbr5 >= nbr2 && nbr5>=nbr3 && nbr5 >= nbr4)
    {
        alert("le max est :" + nbr5);
    }
}


function maFonction3()
{
    for(i=0; i<=10; i++){
        if (i%2==0){
            console.log(i)
        }
    }
}


function direBonjour(){
    console.log("Bonjour")
}

direBonjour()

function direBonjourApresXSecondes(x){
    setTimeout(direBonjour,x*1000)
}

direBonjourApresXSecondes(10)