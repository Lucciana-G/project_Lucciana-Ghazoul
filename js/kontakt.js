"use strict";

//Hämtar element från DOM
const sortiment = document.getElementById("menu-list");
const menubtn = document.querySelector(".menu-troggle");
const menu = document.querySelector(".menu");

//formuläret element
const form = document.querySelector("#kundForm");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const textArea = document.querySelector("#textarea");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("history");

//Skapar en eventlistener med funktion som öppnar och stänger menyn
menubtn.addEventListener("click", function(){
    menu.classList.toggle("open")
});

//Här är formuläret kod och validering

//Nyckeln som historiken sparas under i localStorage
const STORAGE_KEY = "kunduppdrag";
