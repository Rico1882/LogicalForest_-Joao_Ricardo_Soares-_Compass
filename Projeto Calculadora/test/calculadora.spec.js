
import assert from "assert"
import chai from "chai"
import Calculadora from "../src/Calculadora.js"

const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 9 e 6 resultando em 15',() => {
        let resultado = Calculadora.soma(9, 6)
        expect(resultado).to.be.eq(15)
})
    it('Deve somar -3 e 4 resultando em 1',() => {
        let resultado = Calculadora.soma(-3, 4)
        expect(resultado).to.be.eq(1)
})
    it('Deve somar -4 e -5 resultando em -1',() => {
        let resultado = Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
})
    it('Deve somar 10,1 e 4 resultando em 14,1',() => {
        let resultado = Calculadora.soma(10.1, 4)
        expect(resultado).to.be.eq(14.1)
})
    it('Deve somar 10,1 e 15,6 resultando em 25,7',() => {
        let resultado = Calculadora.soma(10.1, 15.6)
        expect(resultado).to.be.eq(25.7)
})


describe('Testes de subtração', () => {
    it('Deve subtrair 7 e 8 resultando em -1',() => {
        let resultado = Calculadora.sub(7, 8)
        expect(resultado).to.be.eq(-1)
})
    it('Deve subtrair 10 e 5 resultando em 5',() => {
        let resultado = Calculadora.sub(10, 5)
        expect(resultado).to.be.eq(5)
})
    it('Deve subtrair -7 e 8 resultando em -15',() => {
        let resultado = Calculadora.sub(-7, 8)
        expect(resultado).to.be.eq(-15)
})
    it('Deve subtrair 18,5 e 10,1 resultando em 8,4',() => {
        let resultado = Calculadora.sub(18.5, 10.1)
        expect(resultado).to.be.eq(8.4)
})


describe('Testes de Divisão', () => {
    it('Deve dividir 9 por 3 resultando em 3',() => {
        let resultado = Calculadora.div(9, 3)
        expect(resultado).to.be.eq(3)
})
    it('Deve dividir 9 por 9 resultando em 1',() => {
        let resultado = Calculadora.div(9, 9)
        expect(resultado).to.be.eq(1)
})
    it('Deve dividir -9 por -3 resultando em 3',() => {
        let resultado = Calculadora.div(-9, -3)
        expect(resultado).to.be.eq(3)
})
    it('Deve dividir 250 por 50 resultando em 5',() => {
        let resultado = Calculadora.div(250, 50)
        expect(resultado).to.be.eq(5)
})


describe('Testes de multiplicação', () => {
    it('Deve multiplicar 9 por 3 resultando em 27',() => {
        let resultado = Calculadora.mult(9, 3)
        expect(resultado).to.be.eq(27)
})
    it('Deve multiplicar 9 por 0 resultando em 9',() => {
        let resultado = Calculadora.mult(9, 0)
        expect(resultado).to.be.eq(0)
})
    it('Deve multiplicar 12,5 por 15,9 resultando em 198,75',() => {
        let resultado = Calculadora.mult(12.5, 15.9)
        expect(resultado).to.be.eq(198.75)
})
    it('Deve multiplicar 9 por -1 resultando em -9',() => {
        let resultado = Calculadora.mult(9, -1)
        expect(resultado).to.be.eq(-9)
})


describe('Testes de Raiz Quadrada', () => {
    it('Deve verificar a Raiz quadrada de 9 resultando em 3',() => {
        let resultado = Calculadora.raiz(9)
        expect(resultado).to.be.eq(3)
})
    it('Deve verificar a Raiz quadrada de 2 resultando em 1.4142135623730951',() => {
        let resultado = Calculadora.raiz(2)
        expect(resultado).to.be.eq(1.4142135623730951)
})
    it('Deve verificar a Raiz quadrada de -1 resultando em NaN',() => {
        let resultado = Calculadora.raiz(-1)
        expect(resultado).to.be.NaN
})


describe('Testes de Porcentagem', () => {
    it('Deve verificar o percentual de 10 para 100 resultando no percentual de 10%',() => {
        let resultado = Calculadora.porcent(10, 100)
        expect(resultado).to.be.eq(10)
})
    it('Deve verificar o percentual de 33,33 para 500 resultando no percentual de 6,6659999999999995%',() => {
        let resultado = Calculadora.porcent(33.33, 500)
        expect(resultado).to.be.eq(6.6659999999999995)
})
    it('Deve verificar o percentual de -10 para 500 resultando no percentual de -2%',() => {
        let resultado = Calculadora.porcent(-10, 500)
        expect(resultado).to.be.eq(-2)

})


describe('Testes de Raiz Cúbica', () => {
    it('Deve verificar a Raiz Cúbica de 0 resultando em 0',() => {
        let resultado = Calculadora.raiz_cub(0)
        expect(resultado).to.be.eq(0)
})
    it('Deve verificar a Raiz Cúbica de 2 resultando em 1.2599210498948732',() => {
        let resultado = Calculadora.raiz_cub(2)
        expect(resultado).to.be.eq(1.2599210498948732)
})
    it('Deve verificar a Raiz Cúbica de -1 resultando em -1',() => {
        let resultado = Calculadora.raiz_cub(-1)
        expect(resultado).to.be.eq(-1)
})


describe('Testes de Potência', () => {
    it('Deve verificar a potencia de 7 elevado a 2 resultando em 49',() => {
        let resultado = Calculadora.potencia(7, 2)
        expect(resultado).to.be.eq(49)
})
    it('Deve verificar a potencia de 4 elevado a 0,5 resultando em 2',() => {
        let resultado = Calculadora.potencia(4, 0.5)
        expect(resultado).to.be.eq(2)
})
    it('Deve verificar a potencia de 8 elevado a 1/3 resultando em 2',() => {
        let resultado = Calculadora.potencia(8, 1/3)
        expect(resultado).to.be.eq(2)
})
    it('Deve verificar a potencia de 7 elevado a -2 resultando em 020408163265306124',() => {
        let resultado = Calculadora.potencia(7, -2)
        expect(resultado).to.be.eq(0.020408163265306124)
})
})
})
})
})
})
})
})
})