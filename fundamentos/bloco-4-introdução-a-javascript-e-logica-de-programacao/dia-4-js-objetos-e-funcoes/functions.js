// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromeChecker(palavra){

    let reverse = palavra.split('').reverse().join('');
  
    return palavra === reverse
  }
  
  console.log(palindromeChecker('peru'))
  console.log(palindromeChecker('arara'))
  console.log(palindromeChecker('banana'))
  
  // 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function greaterValue(arr){

   let value = Math.max(...arr);
   return arr.indexOf(value)

  }
  
  console.log(greaterValue([2, 4, 6, 7, 10, 0, -3]))

  // 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


  function lesserValue(arr){

    let value = Math.min(...arr);
    return arr.indexOf(value)

  }

  console.log(lesserValue([2, 4, 6, 7, 10, 0, -3]))

  