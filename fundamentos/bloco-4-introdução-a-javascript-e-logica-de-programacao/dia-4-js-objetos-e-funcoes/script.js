// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silvia',
    age: '34',
    medals: { golden: 2, silver: 3}
}

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

let name = player['name'];
let lastName = player['lastName']
let age = player['age']
console.log(`A jogadora ${name} ${lastName} tem ${age} anos de idade`)

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

let best = player['bestInTheWorld'];
console.log(`A jogadora ${name} ${lastName} foi eleita a melhor do mundo por ${best.length} vezes`)

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let medals = player['medals']
console.log(`A jogadora possui ${medals['golden']} medalhas de ouro e ${medals['silver']} medalhas de prata`)

//For/in

// 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let key in names){
      console.log(`Olá ${names[key]}`)
  }

  // 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car){
      console.log(key, car[key])
  }

  // Usando o objeto abaixo, faça os exercícios a seguir:
  
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

  console.log(`Seja bem-vinda ${info['personagem']}`)

  // 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: {
    //personagem: 'Margarida',
    //origem: 'Pato Donald',
    //nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    //recorrente: 'Sim'
    //}
    
info['recorrente'] = 'Sim';
console.log(info)


// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: 
//personagem
//origem
//nota
//recorrente

for(let key in info) {
    console.log(key)
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: 
//Margarida
//Pato Donald
//Namorada do personagem principal nos quadrinhos do Pato Donald
//Sim

for(let key in info){
    console.log(info[key])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console: 

//Margarida e Tio Patinhas
//Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
//Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
//Ambos recorrentes 
// Atenção para essa última linha!

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  console.log(`${info['personagem']} e ${info2['personagem']}`)
  console.log(`${info['origem']} e ${info2['origem']}`)
  console.log(`${info['nota']} e ${info2['nota']}`)
  console.log(`${info['recorrente']} e ${info2['recorrente']}`)
 

  // Usando o objeto abaixo, faça os exercícios a seguir:

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

  let reader = leitor['nome'];
  let sureName = leitor['sobrenome'];
  let faveBook = leitor['livrosFavoritos'][0]['titulo'];
  console.log(`O livro favorito de ${reader} ${sureName} se chama '${faveBook}'`)

  // 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações: {
  //titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  //autor: 'JK Rowling',
  //editor: 'Rocco',

  leitor['livrosFavoritos'].push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editor: 'Rocco'});

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(`${reader} tem ${leitor['livrosFavoritos'].length} livros favoritos`)

