'use strict';

// Exemplo 1 : objeto com dados de uma pessoa
console.log('Exemplo 1\n');
const pessoa = {
    //Propiedade: valor
    nome_completo: 'Chaves',
    idade: 8,
    cidade: 'São Paulo',
    estado: 'SP'
};
 console.log(pessoa);
 // Acessamos as propriedades usando nomeDoObjeto.nomeDaPropriedade
console.log(`O ${pessoa.nome_completo} tem ${pessoa.idade} anos é mora ${pessoa.cidade}-${pessoa.estado}`);

