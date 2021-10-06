const divUsername = document.querySelector('div.username')

divUsername.innerHTML = "<span>Nome Usuário</span>"

//EXERCÍCIO 2

// OPÇÃO 1
const spanUsername = document.createElement("span");
spanUsername.innerText = "Nome Usuário";
spanUsername.className = "username";
divUsername.parentNode.replaceChild(spanUsername, divUsername);



// OPÇÃO 2
// divUsername.replaceWith(spanUsername);


//OPÇÃO 3
// const divAvatar = document.querySelector('.avatar-content');

// divAvatar.removeChild(divUsername);

// divAvatar.innerHTML += "<span>Nome Usuário</span>"

const [ inputPrimeiroNome ] = document.getElementsByName('name');

inputPrimeiroNome.placeholder = "Digite seu primeiro nome";

//OPÇÃO 2
// inputPrimeiroNome.placeholder = inputPrimeiroNome.placeholder.replace("nome completo", "primeiro nome") 



const formInputs = document.querySelectorAll('.form-auth input');

formInputs.forEach(input => input.style.borderRadius = '10px');

const { body } = document;
body.style.backgroundColor = '#fafafa';

//body.style.cssText= "background-color: #666; color:red";


const form = document.querySelector('.form-auth');
const errorContainer = document.querySelector('.errors-container');

const { name: nameInput, email, password, surname, username, dateOfBirth } = form.elements;
const formElements = [nameInput, email, password, surname, username, dateOfBirth]
/*

form.addEventListener("submit", function(event){
    if(!email.value.length){
        alert("Preencha o campo email")
        event.preventDefault();
    };
    if(!nameInput.value.length){
        alert("Preencha o campo nome")
        event.preventDefault();
    };
    if(!surname.value.length){
        alert("Preencha o campo sobrenome")
        event.preventDefault();
    };
    if(!username.value.length){
        alert("Preencha o campo usuario")
        event.preventDefault();
    };
    if(!password.value.length){
        alert("Preencha o campo senha")
        event.preventDefault();
    };
    if(!dateOfBirth.value.length){
        alert("Preencha o campo data de nascimento")
        event.preventDefault();
    }
})
 codigo do Ian - ele declarou uma funçao antes e fez um loop

const formElements = [nameInput, email, password, surname, username, dateOfBirth]

function checkIfEmpty(input) {
  form.addEventListener('submit', function (event) {
    if (!input.value.length) {
      alert(`Preenha o campo ${input.name}, noob`);
      event.preventDefault();
    }
  });
};

for (let i = 0; i < formElements.length; i ++) {
  checkIfEmpty(formElements[i])
}

 */

function checkIfEmpty(input, errors) {
    if (!input.value.trim().length) {
      errors.push(`Preenha o campo ${input.name}, noob`);
    }
  };

function validateEmailInput(){
  const isValidEmail = email.value.includes("@") && email.value.includes(".");
  const isEmailwithinLimit = email.value.trim().length >= 10 && email.value.trim().length <= 100;
  
  const span = email.nextElementSibling;
  span.innerText = "";

  if(!isValidEmail){
    span.innerText = "O email dever ser valido";
    email.insertAdjacentElement("afterend", span);
    email.style.borderColor = "red";
    return false;
  };
  if(!isEmailwithinLimit){
    email.style.borderColor = 'red';
    span.innerText = "O email dever ter entre 10 e 100 caracteres";
    email.insertAdjacentElement("afterend", span);
    return false;
  };
  email.style.borderColor = "green";
  return true;
}

email.onblur = validateEmailInput;
 
/*

  form.addEventListener('submit', function (event) {
    const errors = [];
  
    for (let i = 0; i < formElements.length; i ++) {
      checkIfEmpty(formElements[i], errors)
    };
  
    if(errors.length) {
      errors.forEach(error => {
        errorContainer.innerHTML += `<li>${error}</li>`
      })
      event.preventDefault();
    }
  });
*/

  form.addEventListener("submit", function(event){
   
   /*
    if(email.value.length < 10 || email.value.length > 180 ){
        const erro = document.createElement("p").innerHTML("Tamanho do email tem que ser maior que 10 caracteres e menor que 180")
        email.insertAdjacentHTML('beforeend', erro)


    if(!email.value.includes("@") && !email.value.includes(".") ){
        alert("o email tem que ter @ e um ponto")
        event.preventDefault();
    }

    if(!nameInput.value.length){
        alert("Preencha o campo nome")
        event.preventDefault();
    };


    if(!surname.value.length){
        alert("Preencha o campo sobrenome")
        event.preventDefault();
    };
    if(!username.value.length){
        alert("Preencha o campo usuario")
        event.preventDefault();
    };
    if(!password.value.length){
        alert("Preencha o campo senha")
        event.preventDefault();
    };
    if(!dateOfBirth.value.length){
        alert("Preencha o campo data de nascimento")
        event.preventDefault();
    }
    
})
*/

      if(!validateEmailInput){
        return event.preventDefault();

    };


    event.preventDefault();


    const [ day, month, year ] = dateOfBirth.value.split("/");
    const formatedDate = new Date(year, month-1, day).toISOString(),

    const user = {
      name: nameInput.value,
      surname: surname.value,
      username: username.value,
      email: email.value,
      dateOfBirth: formatedDate
    }

    console.log(user);

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then(response => {
      if(response.status === 201){
        location = './feed.html';
      } else if ( response.status === 400){
        alert('Deu erro se vira')
      }
      return response.json()
    })
  });

  