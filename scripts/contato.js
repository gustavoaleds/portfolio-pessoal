// Alterando cor de campos caso não esteja devidamente preenchido

const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

//VALIDANDO CAMPOS

function validarCampos() {
  if (nome.value == "") {
     notValid(nome, "Preencha este campo");
     return false;
  } else {
     itsValid(nome);
  }

  if (email.value == "") {
     notValid(email, "Preencha este campo");
     return false;
  } else if (!isEmail(email.value)) {
     notValid(email, "E-mail não válido");
     return false;
  } else {
     itsValid(email);
  }

  if (telefone.value == "") {
     notValid(telefone, "Preencha este campo");
     return false;
  } else {
     itsValid(telefone);
  }
  return true;
}

// VERSÃO DESCONTINUADA
// function validarCampos() {
  
//   let nomeValido = false;
//   let telefoneValido = false;
//   let emailValido = false;

//   if (nome.value == "") {
//     notValid(nome, "Preencha este campo");
//   } else {
//     itsValid(nome);
//     nomeValido = true;
//   }

//   if (email.value == "") {
//     notValid(email, "Preencha este campo");
//   } else if (!isEmail(email.value)) {
//     notValid(email, "E-mail não válido");
//   }else{
//     itsValid(email);
//     telefoneValido = true;
//   }

//   if (telefone.value == "") {
//     notValid(telefone, "Preencha este campo");
//   }else{
//     itsValid(telefone);
//     emailValido = true;
//   }

//   if (emailValido && telefoneValido && nomeValido == true) {
//     return true;
//   }else{
//     return false;
//   }
// }


// FUNÇÃO QUE APLICA CLASSE QUANDO FOR OU NÃO VÁLIDO;

function itsValid(input) {
  const formControl = input.parentElement;

  formControl.className = "field sucess";
}

function notValid(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "field error";
}

// VERIFICADORES DE E-MAIL E TELEFONE;

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}


// MÁSCARA DE TELEFONE

function mascaraTelefone(telefone) {
    const texto = telefone.value;
    const txtApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = txtApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (txtApenasNumeros.length < 11) {
        telefoneFormatado = txtApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    telefone.value = telefoneFormatado;
}

const campoTelefone = document.getElementById('telefone');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});



//FUNÇÃO PARA ENVIAR INFORMAÇÕES PARA O WHATSAPP

function enviarParaWhatsApp() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
  const textoCodificado = encodeURIComponent(texto);
  const numeroWhatsApp = '5581982629228'; // Insira o número de telefone do WhatsApp aqui (apenas números)
  const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

  window.open(url, '_blank');
}

function enviarFormulario() {
  if (validarCampos()) {
      enviarParaWhatsApp();
  }else{
    console.log('Erro!!')
  }
}


const button = document.querySelector('#button-submit')

button.addEventListener('click', enviarFormulario)










// form.addEventListener('submit', (e) => {
//     checkInputs()
// })

// function checkInputs(){

//     const nomeValue = nome.value.trim();
//     const emailValue = email.value.trim();
//     const telefoneValue = telefone.value;

//     if (nomeValue === ""){

//         errorValidation(nome, 'Preencha esse campo')

//     }else{
//         sucessValidation(nome);
//     }

//     if (emailValue === '') {
//         errorValidation(email, 'Preencha esse campo');
//     }else if (!isEmail(emailValue)){
//         errorValidation(email, 'E-mail inválido');
//     }else{
//         sucessValidation(email)
//     }

//     if (telefoneValue === '') {
//         errorValidation(telefone, 'Preencha esse campo')
// }
// }
// function errorValidation(input, message) {

//     const formControl = input.parentElement;

//     const small = formControl.querySelector('small')
//     small.innerText = message;

//     formControl.className = 'field error';

// }
// function sucessValidation(input) {

//     const formControl = input.parentElement;

//     formControl.className = 'field sucess';
// }
// function isEmail(email) {
//     return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
// }
