'use strict';

/*Comandos Condicionais mais comuns
if -> Se
else -> Senão
*/

console.log('Exemplo 1');

let numero = 50;
//Condicional simplie(usa apenas if)
if(numero >= 10){
    console.log('condiçao True');
}

console.log('\nExemplo 2');

let aluno = "Ozzy";
let idade = 18;
/* Logica: ferificar se o aluno e maior ou menor de idade */
//Condicional Composta(if/else)
if(idade >= 18){
    console.log(`${aluno}, você maior de idade`);
}else{
    console.log(`${aluno}, você é menor de idade`);
}
