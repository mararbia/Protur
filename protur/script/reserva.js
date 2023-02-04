let inputStart = document.getElementById("start");
let inputEnd = document.getElementById("end");

function dateDifference(date1, date2) {
  // Converting the strings to JavaScript date objects
  var date1 = new Date(date1);
  var date2 = new Date(date2);

  // Calculating the difference in milliseconds
  var difference = date2 - date1;

  // Calculating the difference in days
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Returning the difference in days
  return days;
}

let valor = 399;
let taxa = 348.99;

let precoTotal = document.getElementById("precoTotal");
let precoServiço = document.getElementById("precoServiço");
let precoNoite = document.getElementById("precoNoite");
let slider = document.getElementById("slider");
let diaria = document.getElementById("diaria");
let button = document.getElementById("button1");
let teste1 = document.getElementById("teste1").textContent;

let x = undefined;
let y = undefined;

inputStart.addEventListener("input", () => {
  x = inputStart.value;
  console.log(x);
});

inputEnd.addEventListener("input", () => {
  y = inputEnd.value;
  console.log(y);
});

const total = () => {
  precoNoite.innerHTML = valor * dateDifference(x, y);
  precoTotal.innerHTML = valor * dateDifference(x, y) + taxa;
  diaria.innerHTML = dateDifference(x, y);
};

button.addEventListener("click", () => {
  const diffInDays = dateDifference(x, y);
  teste1.innerHTML = diffInDays;
  console.log(dateDifference(x, y));
  total();
});
