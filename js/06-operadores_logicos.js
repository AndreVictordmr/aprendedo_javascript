'use strict';


/* Operadores Lógicos
&& -> E     and
|| -> OU    or
!  -> Não   not

prioridades   ! >&&>||

nota    (===) isso e uma comparaçao de valor e tipo
        (==)  isso somente compara o valor
*/ 

//&& > retorna TRUE se todas as condiçoes forem verdadeiras

console.log("Exemplo &&");
let idade = 20;
let temCarta = false;

if( idade >= 18 && temCarta){
    console.log("Você pode dirigir");
}else{
    console.log("Não pode dirigir");    

}

console.log("\nExemplo ||");
//|| > retorna TRUE se uma das condiçoes forem verdadeira
let feriado = true;
let fimDeSemana = false;

if (feriado || fimDeSemana) {
    console.log("Não tem aula");
    
}else{
    console.log("Tem aula!");
    
}