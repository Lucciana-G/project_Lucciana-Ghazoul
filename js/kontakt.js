"use strict";

//Hämtar element från DOM
const sortiment = document.getElementById("menu-list");
const menubtn = document.querySelector(".menu-troggle");
const menu = document.querySelector(".menu");

//Skapar en eventlistener med funktion som öppnar och stänger menyn
menubtn.addEventListener("click", function(){
    menu.classList.toggle("open")
});