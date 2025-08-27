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
