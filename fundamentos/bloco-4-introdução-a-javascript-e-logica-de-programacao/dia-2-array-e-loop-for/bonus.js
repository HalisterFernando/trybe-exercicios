// Bônus - Bubble Sort
// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 1; i < numbers.length; i++){
    for(let n = 0; n < i; n++){        
        if(numbers[i] < numbers[n]){
            let position = numbers[i];
            numbers[i] = numbers[n];
            numbers[n] = position
        }
    }
}
console.log(numbers)

// Ordene o array numbers em ordem decrescente e imprima seus valores;

for(let i = 1; i < numbers.length; i++){
    for(let n = 0; n < i; n++){        
        if(numbers[i] > numbers[n]){
            let position = numbers[i];
            numbers[i] = numbers[n];
            numbers[n] = position
        }
    }
}
console.log(numbers)

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = [];

for(let i = 0; i < array.length; i++){
    if(isNaN(array[i+1])){newArr.push(array[i] * 2)}else{newArr.push(array[i]*array[i+1])}
}
console.log(newArr)




