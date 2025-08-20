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

console.log("\nExemplo 4: loop e array");

const videoGames = ["Ps5","Xbox One","switch 2","steam deck"] ;

for(let l=0; l<videoGames.length;l++){
    console.log(videoGames[l]);
}

console.log("\n---\n");

// Usando loop for/of(esclusivo do js)
// usamos um var/const(plataformas) para acessar cada elemento do array(no caso videoGame)
for(const plataformas of videoGames){
    console.log(plataformas);
}

console.log("\nExemplo 5: loops e objetos");
const pessoas ={
    nome:'tim',
    idade: 20,
    cidade:"São Paulo",
    estado:"SP"
};
// usando o loop For/in para objetos(exclusivos do JS)
for(const prop in pessoas){
    console.log(pessoas[prop]);
}