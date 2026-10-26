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
const textArea = document.querySelector("#text");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const confirmation = document.querySelector(".confirmation");


//Skapar en eventlistener med funktion som öppnar och stänger menyn
menubtn.addEventListener("click", function(){
    menu.classList.toggle("open")
});

//Här är formuläret kod och validering

//Nyckeln som historiken sparas under i localStorage
const STORAGE_KEY = "kunduppdrag";

//Array som har sparade historik ärende (laddar tidigare ärende)
let history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; //Hämtar data eller om inget sparat får vi null

// Array som används för felmeddelanden
let errors =[];

//Funktion som validerar formuläret inmatning
function validateForm(){
    errors = [];
    //Läs värdena från formuläret och trima bort mellanslag
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
     const text = textArea.value.trim();

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
    if(text ==="" || text.length < 20){
        errors.push("Beskriv gärna vad gäller ditt ärende.")
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

//Skapa kundärende
function creatQuestion(){
    //Hämta information från formuläret
    const question ={
        fullname: fullnameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        text: textArea.value.trim()
    };

    history.push(question);   // lägg till sist i arrayen
    saveInStorage();  // spara alla ärende i localStorage
}

//spara history i localstorage
function saveInStorage(){
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}



//Funktion som visar bekräftelse och historik
function showConfirmation(){
    confirmation.style.display = "block";
    //Tömmeer diven
    historySection.innerHTML = "";

    //Hämtar det sista ärende i arrayen
    const senaste = history[history.length - 1];

    //Skapar ett stycke med det senaste ärende
    const p = document.createElement("p");
    p.textContent = senaste.fullname + "-" + senaste.text;
    historySection.appendChild(p);
   
}
// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - Spara ärende i localStorage om valideringen lyckas
//Visa bekräftelse

form.addEventListener("submit", function(event){
    event.preventDefault();

    if(validateForm()){
        creatQuestion();
        showConfirmation();
        form.reset();
    }else{
        confirmation.style.display = "none";
    }
})

