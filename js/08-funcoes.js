'use strict';

/*Sobre Funções
Funções são bloco de código responsáveis por executar determinadas tarefas. Para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada através do seu nome.

Vantagens ao usar funções:
- Reutilização de codigo
- Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
- Performace melhor
- Maior faciliadade para manutenções

No javascript, existem varias maneiras de se criar uma funçao: funçao anonima, funçao nomeada/declarada e arrow function.

*/
console.log("Exemplo 1: funçao anonima");

const exemplo1 = function(){
    //corpo da funçoa que a funçao vai fazer
    console.log("Olá anonimo");
    
};
//Chamando a funçao
exemplo1();

console.log("\nExemplo 2: funçao nomeada/Declarada");
function exemplo2(){
    console.log("Eu fui declarado dessa vez");   
}

exemplo2();

console.log("\nExemplo 3: Arrow function");
//Sintaxe ponteciamente mais simples para funções no JavaScript
const exemplo3 = () => {
    console.log("eu sou uma flecha");
};
exemplo3();

/*Obs.: funções (em qualquer sintaxe) também podem trabalhar com parâmetros/argumentos.
Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre os parânteses.
Geramente, ao terminar o processamento dos dados, a função "retorna" para fora um resultado.*/

console.log("\nExemplo 4: funçao com parametro")
function saudacao(nome = "Visitante"){

    console.log(`Olá ${nome}`);
    
}
saudacao("André");
saudacao();
//Sempre que houver a necessidade de trabalhar com o resultado do processamento de uma funçao então essa funçao deve ter o return.
console.log("\nExemplo 5: Função com parâmetro e retorno");
function multiplicar(valor1,valor2) {
    return valor1*valor2;
}

let resultado1 = multiplicar(10,5);
let resultado2 = multiplicar(200,10);

console.log("Resultado 1 : "+resultado1);
console.log("Resultado 2 : "+resultado2);

console.log("\nExemplo 6: Simplificando com Arrow Function");

/* function soma(valor1,valor2){
        return valor1+valor2;
}*/ 
//Arrow function com retorno implicito
const soma = (valor1,valor2)=>valor1+valor2;
;

console.log(soma(150,500));

console.log("\nExemplo 7: Formatando valor monetario");
let preco = 5000;
let desconto = preco * 0.10;//10%
let precof= preco - desconto;

function formatarMoeda(valor){
    return new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format(valor);
}

console.log("Preço original: "+formatarMoeda(preco));
console.log("desconto: "+formatarMoeda(desconto));
console.log("Preço final: "+formatarMoeda(precof));
console.log("\n")
//Exemplo: usando recurso da classe Intl(Internacionalização)
const exemplo = new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format(preco);
console.log(exemplo);
