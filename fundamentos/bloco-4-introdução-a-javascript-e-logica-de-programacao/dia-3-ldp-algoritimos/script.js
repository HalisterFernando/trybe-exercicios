let ast = ["*","**","***","****","*****"]
let space = ['    *','   **','  ***',' ****', '*****'];
let piramid = ['  *',' ***','*****']
let n = 5;

// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

for(let i = 0; i < n; i++){
   console.log("*****")
}

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

for(let i = 0; i < n; i++){
   for(let n = 0; n < ast.length; n++){
      if(i = ast[n]){console.log(ast[n])}
   }    
}

// Agora inverta o lado do triângulo. 

for(let i = 0; i < n; i++){
   for(let n = 0; n < space.length; n++){
      if(i = space[n]){console.log(space[n])}
   }
}

// Depois, faça uma pirâmide com n asteriscos de base:

for(let i = 0; i < n -2; i++){
   for(let n = 0; n < piramid.length; n++){
      if(i = piramid[n]){console.log(piramid[n])}
   }
}

// Faça um programa que diz se um número definido numa variável é primo ou não.

let isPrime = 15;
let result = [];

for(let i = 1; i <= isPrime; i++){
if(isPrime % i === 0){result.push(isPrime % i)}
}
console.log(result)
if(result.length === 2){console.log("It's prime")}else{console.log("Not prime")}