const valor = 399;
const taxa = 348.99;

const precoTotal = document.getElementById("precoTotal");
const precoServiço = document.getElementById("precoServiço");
const precoNoite = document.getElementById("precoNoite");
const slider = document.getElementById("slider");
const diaria = document.getElementById("diaria");

const total = () => {
  console.log(slider.value);

  precoNoite.innerText = valor * slider.value;
  precoTotal.innerText = valor * slider.value + taxa;
  diaria.innerText = slider.value;
};
total();
