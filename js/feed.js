
const botaoVerMais = document.querySelector('#more');

const post = document.querySelector(".card");

botaoVerMais.addEventListener('click', ()=> {
    const postClone = post.cloneNode(true);
    botaoVerMais.insertAdjacentElement( "beforebegin", postClone);
});

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

const likes = document.querySelector(".likes")
// fazer o coração ficar vermelho

//fazer com que o numero de likes mude cada vez que vc clica


const barraPesquisa = document.querySelector(".busca form");

barraPesquisa.addEventListener("mouseover", ()=> {
    barraPesquisa.style.boxShadow = "0px 1px 3px black"
});

barraPesquisa.addEventListener("mouseout", ()=> {
    barraPesquisa.style.boxShadow = "none"
});


