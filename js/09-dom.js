'use strict';

/*Exemplo 01 */

/*Procurando (querySelector) por um elemento chamado exemplo1*/
const exemplo01=document.getElementById("exemplo1");
const mensagem01=document.querySelector("#mensagem01");
const pagina=document.querySelector("body");


//Para selecionar varios elementos, use querySelectorAll.
//O resultado é uma especie de array de elementos (NodeList).
const paragrafos=document.querySelectorAll("p");
console.log(paragrafos);


/*Sobre Eventos 
Um evento é um acontecimento ou fenômeno que, quandoacontece, dispara ações em nosso programa/site/aplicação.
Javascript suporta centenas de tipos de eventos. Exemplos: clique do mouse, pressionar teclar, tocar na tela, rolagem da página, carregamento da página e etc. */
//Exemplo detectando eventos
exemplo01.addEventListener("click", function () {
    mensagem01.textContent = "Isto é um evento";//cria um texto quando clica no titulo
    mensagem01.classList.add("destaque");//adiciona uma classe
});

mensagem01.addEventListener("dblclick",function(){
    mensagem01.textContent = "";//tira um texto
    mensagem01.classList.remove("destaque");//tira uma classe
});

/*Exercicios
1 Crie uma constate nova e selecione o h1 da sua pagina 
2 crie um evento em que, ao passar o mause em cima do h1, o texto mude para "Praticando eventos!" e também fique centralizado
3 faça também um evento de click para a palavra"Referencia", e o texto do h1 volte para "Evento" e o alinhamento volte a ficar a esquerda */

const titulo=document.querySelector("h1");
const normal=document.querySelector("#ref");

titulo.addEventListener("mouseover", function(){
    titulo.textContent = "Praticando Eventos!";
    //usando class
    titulo.classList.add("titulo");
    //usando style inline
    //titulo.style.textAlign = "center";
});

normal.addEventListener("click", function(){
    titulo.textContent = "Eventos";
    titulo.classList.remove("titulo");
});


/*Exemplo 3: modo noturno */
const btn = document.querySelector("#noturno");
let isEscuro = false;
const textOrigin = btn.textContent;
btn.addEventListener("click", function() {
    
        pagina.classList.toggle("m_noturno");
        pagina.style.transition = "1s";
        if(isEscuro){
            
            btn.textContent = textOrigin;
            isEscuro=false;
        }else{
            btn.textContent = "Desativar"
            isEscuro=true;
        }
    //setTimeout
});

