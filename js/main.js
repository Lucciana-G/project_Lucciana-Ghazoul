"use strict";
//Hämtar element från DOM
const menubtn = document.querySelector(".menu-troggle");
const menu = document.querySelector(".menu");

//Skapar en eventlistener med funktion som öppnar och stänger menyn
menubtn.addEventListener("click", function(){
    menu.classList.toggle("open")
});

//SlideShow koder:
let slideIndex=1;
showSlides();

function showSlides(){

    let i;
    //Hämtar element från DOM
    const slides = document.getElementsByClassName("mySlide");
    //Loopar igenom alla bilder i div
    for(i =0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}//Går tillbaka till bild 1 när loopen är klar
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); //Ändrar bild varje 3 sekunder
}
