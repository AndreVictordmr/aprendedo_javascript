'use strict';

const busca = document.querySelector("#busca");
const jogos = document.querySelectorAll('#jogos li');
//monitora a entra de input(digitaçao)
busca.addEventListener('input',function(){
    //captura o que esta sendo escrito
    const termo = busca.value.toLowerCase();
    //acessa ca iten dentro da lista de jogos
    for (const jogo of jogos) {
        //Se o nome incluir algum carecter digitado
        if(jogo.textContent.toLocaleLowerCase().includes(termo)){
            //deixa o item visivel
            jogo.style.display = "list-item"; 
        }else{
            //deixa o iten invisivel
            jogo.style.display = "none";
        }
    }
});