// Exercícios pós aula ao vivo

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado.

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = sum / numbers.length
console.log(media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20){console.log("valor maior que 20")}else{console.log("valor menor ou igual a 20")}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let greaterNum = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > greaterNum){greaterNum = numbers[i]}
}
console.log(greaterNum)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let odd = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){odd += 1};
    if(odd == 0){console.log("nenhum valor ímpar encontrado")} 
}
console.log(odd)

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let smallerNum = greaterNum;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smallerNum){smallerNum = numbers[i]}
}

console.log(smallerNum)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for(let i = 1; i <= 25; i++){
    array.push(i)
}
console.log(array)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for(let i = 0; i < array.length; i++){
    console.log(array[i] / 2)
}
