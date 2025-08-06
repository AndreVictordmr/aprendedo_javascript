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

//Exemplo 2: objeto com array
console.log('\nExmplo2\n');

const livro={
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R Tolkien',
    volumes: [
        'A Sociedade do Anel',
        'As Duas Torres',
        'O Retorno do Rei'
    ]
};

console.log(livro);
console.log(livro.titulo);
/*Para acessar algum dos volumes, primeros acessamos a propriedade(volumes) do objeto, entao usamos o colchetes com indice pois se trata de um array*/
console.log(livro.volumes[1]);

// Exemplo 3 : array de objetos
console.log('\nExemplo 3\n');
const livros = [
    {
        titulo: 'O Assassino no Expresso do Oriente',
        autor: 'Agatha Christie'
    },
    {
        titulo:"Crepúsculo",
        autor: 'Stephanie Myers'
    },
    {
        titulo:'One Piece',
        autor:'Eiichiro Oda'
    }
];
console.log(livros);
console.log(livros[2].titulo);




