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