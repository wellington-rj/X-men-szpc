//passo 1
const personagens = document.querySelectorAll('.personagem')

//passo 2

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }


//passo 3
  
const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');


//passo 3 trocar a foto grande

const imagemPersonagemGrande = document.querySelector('.personagem-grande')

//passo alterar a imagem do personagem grande

const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

//passo mudar nome do personagem grande

const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute("data-name");


//passo 4 alterar a descriçao do personagem

const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    } )
})