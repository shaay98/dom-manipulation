"use strict";

const p = document.getElementById ("mp-one");
console.log(p);

const footer = document.querySelector (".footer");
console.log(footer);

let button = document.getElementById ("btn");
button.addEventListener ("click", function () {
    alert ("thank you for submitting"); 
})

const a = document.querySelector ("#link");
a.addEventListener ("click", function (event) {
    event.preventDefault ();
    console.log("The link was clicked");
})
