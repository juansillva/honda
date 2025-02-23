/*Arquivo app.js para interações do usuário com o website*/
/* Manipulação de elementos da section "Home" */

const motos = [
  {
    element: document.querySelector("#twabsred"),
    button: "#b30000",
    logo : document.querySelector("#default-logo"),
    arrow: document.querySelector("#arrow-red"),
  },
  {
    element: document.querySelector("#twabsblue"),
    button: "#1D2E51",
    logo : document.querySelector("#logo-blue"),
    arrow: document.querySelector("#arrow-blue"),
  },
  {
    element: document.querySelector("#twcbsgrey"),
    button: "#6D6D6D",
    logo : document.querySelector("#logo-grey"),
    arrow: document.querySelector("#arrow-grey"),
  },
  {
    element: document.querySelector("#twcbsred"),
    button: "#b30000",
    logo : document.querySelector("#default-logo"),
    arrow: document.querySelector("#arrow-red"),
  },
 
];

let currentMoto = 0;

const arrowContainer = document.querySelector(".arrow-container");
const interestedButton = document.querySelector("#button-tenho-interesse"); 

arrowContainer.addEventListener("click", function () {

  
  motos[currentMoto].element.classList.remove("active");
  motos[currentMoto].logo.classList.remove("active");
  motos[currentMoto].arrow.classList.remove("active");


  currentMoto = (currentMoto + 1) % motos.length;
  console.log(currentMoto);


  motos[currentMoto].element.classList.add("active");
  motos[currentMoto].logo.classList.add("active");
  motos[currentMoto].arrow.classList.add("active");

 
  interestedButton.style.backgroundColor = motos[currentMoto].button;
});


document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("sidebar-open");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("sidebar-open");
});




