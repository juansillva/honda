const cbabsred = document.getElementById("twabsred");
const cbabsblue = document.getElementById("twabsblue");

const buttonSelect = document.getElementById("arrow-red");

const logoHondaDefault = document.querySelector("#default-logo");
const logoHondaBlue = document.querySelector("#logo-blue");
const buttonTenhoInteresse = document.getElementById("button-tenho-interesse");

buttonSelect.addEventListener("click", function (event) {
  if (cbabsred.classList.contains("active")) {
    cbabsred.classList.remove("active");
    cbabsblue.classList.add("active");

    buttonTenhoInteresse.style.backgroundColor = "#1D2E51";
    logoHondaDefault.classList.remove("active");
    logoHondaBlue.classList.add("active");
  } else {
    cbabsblue.classList.remove("active");
    cbabsred.classList.add("active");
    buttonTenhoInteresse.style.backgroundColor = "#b30000";
    logoHondaDefault.classList.add("active");
    logoHondaBlue.classList.remove("active");
  }
});
