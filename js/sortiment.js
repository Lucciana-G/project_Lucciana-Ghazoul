"use strict";



//Hämtar element från DOM
const sortiment = document.getElementById("menu-list");
const menubtn = document.querySelector(".menu-troggle");
const menu = document.querySelector(".menu");

//Skapar en eventlistener med funktion som öppnar och stänger menyn
menubtn.addEventListener("click", function(){
    menu.classList.toggle("open")
});

//Här skrivs sortiment kort lista som ska skrivas ut
//fetch anrop
fetch("./menu.json")
.then(response => {
    if(!response.ok) throw new Error ("Sortiment kunde inte laddas!");
    return response.json();
})

//Skapar kort till 
.then(varor => {
    sortiment.innerHTML = varor.map(vara =>
        `<article class="kort">
        <img src="${vara.image}" alt="${vara.imageAlt}" loading="lazy">
        <div class="kort-innehall">
          <span class="kategori">${vara.category}</span>
          <h2>${vara.title}</h2>
          <p>${vara.description}</p>
          <p><strong>Ingredienser:</strong> ${vara.ingredients.join(", ")}</p>
          <p class="pris">${vara.priceSEK} kr</p>
        </div>
      </article>`).join("");
})

.catch(error => {
    document.getElementById("message").textContent =   "Något fel hänt, menyn kunde inte laddas!";
    console.error(error);
});