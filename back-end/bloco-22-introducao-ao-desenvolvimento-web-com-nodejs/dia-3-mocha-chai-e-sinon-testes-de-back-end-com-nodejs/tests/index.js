function isNumber(number) {
  let result = 'Neutro';

  if(number > 0) {
      result = 'Positivo'
  } else if(number < 0) {
      result ='Negativo'
  } 

  return result;
}

isNumber();

module.exports = isNumber;
