// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}


// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value;

  if (valor.includes ("@") && valor.includes (".com")) {
    estilizarInputCorreto(emailInput, emailHelper);
  } else {
    emailHelper.innerText = "E-mail inválido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
})

// Função botão
let url = '../index.html';
let btn = document.getElementById("btn-login");

function openPage(url) {
  let win = window.open(url, '_self');
  win.focus();
}

// Validação senha
let inputPsw = document.getElementById("psw");
let labelPsw = document.querySelector('label[for=password]');
let msgErrorPsw = document.getElementById("psw-helper");

let btnLogin = document.getElementById("btn-login");
btn.disabled = true;

// Events Input
inputPsw.addEventListener("blur", (e) =>{
  let valuePsw = e.target.value;
  let caracteres = 5;
 
  if ((valuePsw.length >= caracteres)) {
    btnLogin.disabled = false;
    btn.addEventListener('click', () =>{
      openPage(url);
    })
    estilizarInputCorreto(inputPsw, msgErrorPsw);
  } else {
    msgErrorPsw.innerText = "E-mail ou Senha incorreto";
    estilizarInputIncorreto(inputPsw, msgErrorPsw);
  }  
});


