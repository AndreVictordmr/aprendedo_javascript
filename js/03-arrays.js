'use strict';

//declarando um array(vetor)
let comidas = ['hamburguer','pudim','coxinha','esfira'];
//Acessando um determinado elemento através do indice
console.log(comidas[0]);
// Se quisermos visualizar a estrutura do array inteiro(console):
//console.log(comidas);
console.log(`Eu talvez irei lanchar ${comidas[2]} é ${comidas[3]}`);

// Relembrando como criar/usar array(vetor)
// no JS, o array aceita dados de tipos diferentes 
let naosei=6;
const coisas = [10,"Senac","<h2>Oie</h2>",naosei,15.88];
console.log(coisas[1]);
console.log(coisas[4])

/*Exercicio 
    1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)

    2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.
*/ 
let mangas = ['One piece','Naruto','Eyeshild 21','Chainsaw Man','Spy Family','My Hero Academy','Dragon Ball'];
let exibe =[1,4,6];
exibe.forEach((i) => console.log(`Estes sao algum mangas que eu gosto ${mangas[i]}`)
);




