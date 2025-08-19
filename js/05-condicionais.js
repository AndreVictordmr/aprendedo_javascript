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

console.log("\nExercicio");

/* 1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado". */

let nota1 = 7.45,nota2 = 6.55;
let media = (nota1+nota2)/2; 
console.log("Media: "+media);
if(media >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}