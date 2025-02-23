/* Manipulação de elementos da section "Home" */
/*Eventos de interação com o usuário*/

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
const interestedButton = document.querySelector("#button-tenho-interesse"); // Adiciona a referência do botão

arrowContainer.addEventListener("click", function () {

  
  motos[currentMoto].element.classList.remove("active");
  motos[currentMoto].logo.classList.remove("active");
  motos[currentMoto].arrow.classList.remove("active");


  currentMoto = (currentMoto + 1) % motos.length;
  console.log(currentMoto);


  motos[currentMoto].element.classList.add("active");
  motos[currentMoto].logo.classList.add("active");
  motos[currentMoto].arrow.classList.add("active");

  // Atualiza a cor do botão de interesse com base na moto ativa
  interestedButton.style.backgroundColor = motos[currentMoto].button;
});

const colors = [
  {
    buttoncolor: document.querySelector('.color-red'),
    moto: document.querySelector('#twabsred-versions'),
  }

  



]
 


























document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("sidebar-open");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("sidebar-open");
});

/* Manipulação de elementos da section "Versions"*/

const colorRed = document.querySelector(".color-red");
const colorBlack = document.querySelector(".color-black");
