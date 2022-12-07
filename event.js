console.log("Event in DOM");
document.getElementById("btn").onclick = displayDate;

function displayDate(){
document.getElementById("para").innerHTML= Date();
};


