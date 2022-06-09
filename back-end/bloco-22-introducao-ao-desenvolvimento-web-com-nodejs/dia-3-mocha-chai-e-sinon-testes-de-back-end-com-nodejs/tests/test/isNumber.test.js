const { expect } = require('chai');
const  isNumber  = require('../index.js');

describe('Verifica se um número é positivo, negativo ou neutro', function() {
    it('Retorna positivo caso numero seja > 0', function() {
        const result = isNumber(1);      
        console.log(result)  
        expect(result).equals('Positivo')
    })
    it('Retorna negativo caso número seja < 0', function() {
        const result = isNumber(-10);
        expect(result).equals('Negativo')
    })
    it('Retorna neutro caso número seja = 0', function() {
        const result = isNumber(0);
        expect(result).equals('Neutro')
    })
})
