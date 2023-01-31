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
  
  // Função botão
  let url = '../redefinir_senha.html';
  let btn = document.getElementById("btn-login");
  btn.disabled = true;
  
  function openPage(url) {
    let win = window.open(url, '_self');
    win.focus();
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
      btn.disabled = false;
      btn.addEventListener('click', () => {
        openPage(url);
      });
      estilizarInputCorreto(emailInput, emailHelper);
    } else {
      emailHelper.innerText = "E-mail inválido";
      estilizarInputIncorreto(emailInput, emailHelper);
    }
  })
  
  
  
  
  
  
  
  