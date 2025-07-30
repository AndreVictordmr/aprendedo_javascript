//Habilitando o modo estrito
'use strict';

let teste = 'Senac';

/*Execicio
  Crie uma variavel chamada "uc" e coloque o da UC que estamos
  crie uma variavel chamda "competencia" e coloque nela uma frase que represente o que estamos estudanso nesta uc.
  Monte e mostre uma frase no console exibindo a UC e a competêcia. Exemplo: Estamos na UC2 estudando Front-End com JavaScript. 
*/

let uc= 2,competencia='estudando as linguagem de Front-End, HTML, CSS e JS';

console.log(`Estamos na UC${uc}, ${competencia} no curso desenvolvedor Full-Stack no Senac Penha `);

//Errado!
//console.log("Gosto "muito" de paçoca!");
//Correto! Aspas simples como comando, e duplas como texto
console.log("Gosto 'muito' de paçoca!");
//Correto! Aspas duplas como comando, e simples como texto
console.log('Gosto "muito" de paçoca!');
//Correto! Escapando as aspas como texto
console.log('Gosto \'muito\' de paçoca!');

