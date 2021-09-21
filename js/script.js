
const divUserName = document.querySelector('div.username');

divUserName.innerHTML = "<span>Nome Usuário</span>";

const spanUsername = document.createElement("span");
spanUsername.innerText = "Nome Usuário";
spanUsername.className = "username";

divUserName.parentNode.replaceChild(spanUsername, divUserName);
/*
divUserName.replaceWith(spanUserName)

const divAvatar = document.querySelector('.avatar-content');
divAvatar.removeChild(divUserName);
divAvatar.innerHTML += "<span>Nome Usuário</span>";
*/

const [ inputPrimeiroNome ] = document.getElementsByName("name");
inputPrimeiroNome.placeholder = "Digite seu primeiro nome";


// inputPrimeiroNome.placeholder = inputPrimeiroNome.placeholder.replace("nome completo", "primeiro nome")


// alterar o raio das borads dos inputs
const inputFormulario = document.getElementsByTagName("input");
imputFromulario.style.borderRadius = "30px"

// altere a cor de fundo da pagina para #fafafa

//experimente cssText()


