
const botaoVerMais = document.querySelector('#more');

const post = document.querySelector(".card");

//botaoVerMais.addEventListener('click', ()=> {
//    const postClone = post.cloneNode(true);
//    botaoVerMais.insertAdjacentElement( "beforebegin", postClone);
//});

botaoVerMais.addEventListener('mouseover', ()=> {
    botaoVerMais.style.cursor = "pointer";
    botaoVerMais.style.backgroundColor = "red";

});

botaoVerMais.addEventListener('mouseout', ()=> {
    botaoVerMais.style.cursor = "default";
    botaoVerMais.style.backgroundColor = "white";
});


const post1 = `
<div class="card" id="">
      <div class="card-header">
        <div>
          <img class="avatar" src="./img/avatar-example.png">
          <b>Ana Paula</b>
        </div>
        <img src="./img/icons/more-vertical.svg">
      </div>
      <div class="card-img">
        <img src="./img/publication_example.jpg">
      </div>
      <div class="card-body">
        <div class="card-itens">
          <div class="likes">
            <img src="./img/icons/heart.svg" width="24px">
            <b>1 likes</b>
          </div>
          <b>Postado no dia: 00/00/0000</b>
        </div>
        <div class="card-comments">
          <p><b>Nome comentarista</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  </p>
        </div>
      </div>
      <form class="form-comments" action="/comentar" method="post">
        <input type="text" hidden name="postId" value="">
        <input type="text" placeholder="Adicione um comentário..." name="description">
        <button type="submit">Comentar</button>
      </form>
    </div>
`;

//const likesImage = document.querySelector(".likes img");
//const likesText = document.querySelector(".likes b");


//likesImage.addEventListener("click", ()=>{
  // outra forma de pegar o src da imagem
const likeAPost = (likesImage) => {
  const imageSrc = likesImage.getAttribute("src");
  const likesText = likesImage.nextElementSibling;
  //const imageSrc = likesImage.src;
  const textValues = likesText.innerText.split(' ');
  const textNumber = Number(textValues[0]);


  //if(imageSrc.indexOf("/img/icons/heart.svg") >= 0){
  if(imageSrc ==="./img/icons/heart.svg"){
    likesImage.src = "./img/red-heart.png";
    //likesText.innerText = `${textNumber+1} ${textValues[1]}`;
    likesText.innerText = `${textNumber+1} ${(textNumber +1)=== 1 ? 'like' : 'likes'}`;

  }else{
    likesImage.src = "./img/icons/heart.svg";
   // likesText.innerText = `${textNumber-1} ${textValues[1]}`;
    likesText.innerText = `${textNumber-1} ${(textNumber - 1)=== 1 ? 'like' : 'likes'}`;
  }
  
}
/* Rodrigo fez assim

const likeAPost = (like) => {
  const likes = like.nextElementSibling.querySelector("#qtdLikes");
  if (like.classList.toggle("like") === false) {
    likes.innerHTML = Number(likes.innerHTML) - 1;
  } 
  if(like.classList.toggle("not-like") === false){
    likes.innerHTML = Number(likes.innerHTML) + 1;
  };
};

*/



const barraPesquisa = document.querySelector(".busca form");

barraPesquisa.onmouseover = function(){
  barraPesquisa.style.boxShadow = "0px 1px 3px black"
};


barraPesquisa.addEventListener("mouseout", ()=> {
    barraPesquisa.style.boxShadow = "none"
});


/*

window.addEventListener('scroll', ()=> {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
    const postClone = post.cloneNode(true);
    botaoVerMais.insertAdjacentElement( "beforebegin", postClone);
  }
})

*/

let estaCarregando = false;

function createPost({ fotoPost, racaSite}) {
  return `<div class="card" id="">
  <div class="card-header">
    <div>
      <img class="avatar" src="./img/avatar-example.png">
      <b>${racaSite}</b>
    </div>
    <img src="./img/icons/more-vertical.svg">
  </div>
  <div class="card-img">
    <img src=${fotoPost}>
  </div>
  <div class="card-body">
    <div class="card-itens">
      <div class="likes">
        <img src="./img/icons/heart.svg" onclick="likeAPost(this)" width="24px" class="like-btn">
        <b>1 like</b>
      </div>
      <b>Postado no dia: 00/00/0000</b>
    </div>
    <div class="card-comments">
      <p><b>Nome comentarista</b> Sou um pet super animado com muita energiae muito brincalhao </p>
    </div>
  </div>
  <form class="form-comments" action="/comentar" method="post">
    <input type="text" hidden name="postId" value="">
    <input type="text" placeholder="Adicione um comentário..." name="description">
    <button type="submit">Comentar</button>
  </form>
</div>`
}

async function fetchPosts() {
  const { data: posts } = await axios.get("https://dog.ceo/api/breeds/image/random");
  
  fotoPost = posts.message
  raca1 = fotoPost.replace("https://images.dog.ceo/breeds/", "")
  raca2 = raca1.match(/\/(\w+)/);
  raca3 = raca2[0]
  raca4 = raca1.replace(raca3, '')
  racaSite = raca4.replace(".jpg", '')
 

  //posts.slice(0, 10).forEach(post => {
  const postHtml = createPost({fotoPost, racaSite});
  botaoVerMais.insertAdjacentHTML('beforebegin', postHtml)
  //})

}

window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //const postClone = post.cloneNode(true);
    //verMaisBtn.insertAdjacentElement('beforebegin', postClone)

    //estaCarregando = true;

    fetchPosts()
  }
})

// const userDiv= `<a href="">
// <div class="avatar-content">
//   <img class="avatar" src="./img/avatar-example.png">
//   <b>Nome do Usuário</b>
// </div>
// </a>`

const nav = document.querySelector('nav');
const username = localStorage.getItem("username");

if(!username){
  const anchor = document.createElement('a');
  anchor.href = '/login';
  anchor.innerText = 'Logar';
  nav.appendChild(anchor);
} else {
  const div = document.createElement('div');
  div.classList.add('avatar-content');
  div.innerHTML = `
  <img class="avatar" src="./img/avatar-example.png">
  <div class="username">${username}</div>
  <a href="./cadastro.html" onclick="logout()" >Sair</a>
  `;
  nav.appendChild(div);
};

function logout(){
  localStorage.removeItem('username');
  
}