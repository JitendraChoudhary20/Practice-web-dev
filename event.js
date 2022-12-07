console.log("Event in DOM");
document.getElementById("btn").onclick = displayDate;

function displayDate(){
document.getElementById("para").innerHTML= Date();
};

document.getElementById("btn2").onmouseover=logger;
function logger(){
    document.getElementById("demo").innerHTML="this is logged";
}
document.getElementById("btn2").onmousedown=logger2;
function logger2(){
    var a = document.getElementById("demo");
    console.log(a);
}