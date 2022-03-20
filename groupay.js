
var user_1,user_2,user_3

var amountz;
var e1,e2,e3;
var stat;

function ready(){
    user_1=document.getElementById("no1").value;
    user_2=document.getElementById("no2").value;
    user_3=document.getElementById("no3").value;
    address_u=document.getElementById("address").value;
    console.log(user_1);
    console.log(user_2);
    console.log(user_3);
} 


document.getElementById("equal").onclick=function(){

    ready();
    var q=document.getElementById("amount").value;
    console.log(q);
    e1=(q/3);
    e2=(q/3);
    e3=(q/3);
    stat="no";
    console.log(e1);
    console.log(e2);
    console.log(e3);

document.getElementById("q1").innerHTML=user_1+" shall pay "+e1;
document.getElementById("q2").innerHTML=user_2+" shall pay "+e2;
document.getElementById("q3").innerHTML=user_3+" shall pay "+e3;
    
}




document.getElementById("percent").onclick=function(){

    ready();
    var q=document.getElementById("amount").value;
    console.log(q);
    
    var aa= [75,35,55];
    var a = aa[Math.floor(Math.random()*aa.length)];
    console.log(a)
    stat="no"
    if(a==75){
        var b=20
        var c=5
    }
    else if(a==35){
        var b=45
        var c=20
    }
    else if(a==55){
        var b=5
        var c=40
    }
    console.log(b)
    console.log(c)

    e1=(q*(a/100))
    e2=(q*(b/100))
    e3=(q*(c/100))

document.getElementById("q1").innerHTML=user_1+" shall pay "+e1;
document.getElementById("q2").innerHTML=user_2+" shall pay "+e2;
document.getElementById("q3").innerHTML=user_3+" shall pay "+e3;
    
}





document.getElementById("wild").onclick=function(){

    ready();
    var q=document.getElementById("amount").value;
    console.log(q);
    
    var aa= ["x","y","z"];
    var a = aa[Math.floor(Math.random()*aa.length)];
    console.log(a)
    stat="no"
    if(a=="x"){
        e1=q
        e2=0
        e3=0
    }
    else if(a=="y"){
        e1=0
        e2=q
        e3=0
    }
    else if(a=="z"){
        e1=0
        e2=0
        e3=q
    }

document.getElementById("q1").innerHTML=user_1+" shall pay "+e1;
document.getElementById("q2").innerHTML=user_2+" shall pay "+e2;
document.getElementById("q3").innerHTML=user_3+" shall pay "+e3;

    
}


