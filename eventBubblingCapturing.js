console.log("Event and addEventListener");

// var redbox=document.getElementById("red");
// redbox.onclick=(()=>{
//     console.log("red box is clicked");
// },true);

// var greenbox=document.getElementById("green");
// greenbox.onclick=(()=>{
//     console.log("green box is clicked");
// },true);

// var yellowbox=document.getElementById("yellow");
// yellowbox.onclick=(()=>{
//     console.log("yellow box is clicked");
// },true);

// using addEventListener ..........

console.log("EVENT BUBBLING");

var redbox=document.getElementById("red");
redbox.addEventListener('click',function(){
    console.log("red box is clicked");
});

var greenbox=document.getElementById("green");
greenbox.addEventListener('click',function(){
    console.log("green box is clicked");
});

var yellowbox=document.getElementById("yellow");
yellowbox.addEventListener('click',function(){
    console.log("yellow box is clicked");
});

console.log("EVENT CAPTURING");
// only didffernce is "true".


var redbox=document.getElementById("red");
redbox.addEventListener('click',function(){
    console.log("red box is clicked");
},true);

var greenbox=document.getElementById("green");
greenbox.addEventListener('click',function(){
    console.log("green box is clicked");
},true);

var yellowbox=document.getElementById("yellow");
yellowbox.addEventListener('click',function(){
    console.log("yellow box is clicked");
},true);