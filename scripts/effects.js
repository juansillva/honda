
/*Efeitos/Animações iniciais*/
const loadingBar = document.querySelector(".loading-bar");
const containerLoadingBar = document.querySelector(".container-loading-bar");
const logoLoadingBar = document.querySelector(".logo-loading-bar");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const contentHome = document.querySelector(".content-home");
const secHome = document.querySelector(".home");
const secVersions = document.querySelector(".versions");
const containerTituloVersions = document.querySelector(".container-titulo-versions");

function removeLoadingBar() {
  loadingBar.classList.add("remove-loading-bar");
  containerLoadingBar.classList.add("remove-loading-bar");
  logoLoadingBar.style.display = "none";
}

function showMainContent() {
  header.classList.add("show-header");
  footer.style.opacity = "1";
  contentHome.classList.add("show-content-home");
  secHome.classList.add("show-home");
}

function handleScroll() {
  if (window.scrollY > 235) {
    secVersions.classList.add("show-versions");
    document.querySelectorAll(".tw-versions").forEach((element) => {
      element.classList.add("show-tw-versions");
    });
    containerTituloVersions.classList.add("show-container-titulo-versions");
    window.removeEventListener("scroll", handleScroll);
  }
}

loadingBar.addEventListener("animationend", () => {
  removeLoadingBar();
  showMainContent();
  window.addEventListener("scroll", handleScroll);
});
