"use strict";
console.clear();

//variables of HTML
const formLogin = document.getElementById("login");

const clientName = document.getElementById("clientName");
clientName.value = "buh";


let clientNameInput = "";
formLogin.addEventListener("input",function (event){
    event.preventDefault();
});

console.log(clientNameInput);