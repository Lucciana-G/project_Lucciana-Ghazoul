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

//Array som har sparade historik ärende
let history =[];

// Array som används för felmeddelanden
let errors =[];

//Funktion som validerar formuläret inmatning
function validateForm(){
    errors = [];
    //Läs värdena från formuläret och trima bort mellanslag
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    //kontrollera obligatoriska fält
    if(fullname ===""){
        errors.push("Namn är obligatoriskt.");
    }
    if(email ===""){
        errors.push("E-post är obligatoriskt.");
    }
    if(phone ===""){
        errors.push("Telefon är obligatoriskt.");
    }

    //visa eventuella felmedelanden
    visaErrors();

    //returnerar resultatet av validering
    return errors.length === 0;
}

//Visar felmeddelanden på sidan
function visaErrors(){
    //Rensa tidigare ressultat
    errorList.innerHTML = "";

    //Skiver ut felmeddelande
    errors.forEach(function (error){
        const li = document.createElement("li");
        li.textContent = error;
        errorList.appendChild(li);
    })
}