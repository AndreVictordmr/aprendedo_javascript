'use strict';

/*Exemplo 01 */

// Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01=document.getElementById("exemplo1");
const mensagem01=document.querySelector("#mensagem01");
const pagina=document.querySelector("body");

console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);
//Para selecionar varios elementos, use querySelectorAll.
//O resultado é uma especie de array de elementos (NodeList).
const paragrafos=document.querySelectorAll("p");
console.log(paragrafos);
