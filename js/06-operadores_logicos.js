'use strict';


/* Operadores Lógicos
&& -> E     and
|| -> OU    or
!  -> Não   not

nota    (===) isso e uma comparaçao de valor e tipo
        (==)  isso somente compara o valor
*/ 

//&& > retorna TRUE se todas as condiçoes forem verdairas

console.log("Exemplo &&");
let idade = 20;
let temCarta = false;

if( idade >= 18 && temCarta){
    console.log("Você pode dirigir");
}else{
    console.log("Não pode dirigir");    

}

