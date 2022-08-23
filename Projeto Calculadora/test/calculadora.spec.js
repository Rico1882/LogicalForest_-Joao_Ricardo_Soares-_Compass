
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

describe('Testes de subtração', () => {
    it('Deve subtrair 7 e 8 resultando em -1',() => {
      let resultado = Calculadora.sub(7, 8)
       expect(resultado).to.be.eq(-1)
})
    it('Deve subtrair 10 e 5 resultando em 5',() => {
    let resultado = Calculadora.sub(10, 5)
     expect(resultado).to.be.eq(5)

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

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 9 por 3 resultando em 27',() => {
      let resultado = Calculadora.mult(9, 3)
       expect(resultado).to.be.eq(27)
})
    it('Deve dividir 9 por 1 resultando em 9',() => {
    let resultado = Calculadora.mult(9, 1)
     expect(resultado).to.be.eq(9)

})
})
})
})
})