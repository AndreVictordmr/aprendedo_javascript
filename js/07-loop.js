"use strict";

/* Loops ou estruturas de repetiçao 
    São comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.
    
    Comandos mais tradicionais: while(Enquanto) e for (para)

    Normalmente, os loops sáo controlados através de uma variável contadore, Esta variável é comumente chamado 'i','j','k' ou qualquer outra letra se necessário.

*/

console.log("Exemplo 1: WHILE(Enquanto)");

let x = 1;

while (x <= 5) {
    console.log("Contagem : "+x);
    x++;// = x = x +1;
}

console.log("\nExemplo 2: FOR (para)");

/*for(iniciar variavel;condiçao,atualização ) */
for(let i=1;i<=10;i++){
    console.log("i vale: "+i);
}

console.log("\nExemplo 3: loop regressivo");
for(let m=10;m>=1;m--){
    console.log("Contagem regressiva: "+m);
}