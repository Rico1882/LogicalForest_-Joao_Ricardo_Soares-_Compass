
export default class Calculadora {

    static soma (a, b) {
        return a + b

    }
    static sub (a, b) {
        return a - b

    }
    static mult (a, b) {
        return a * b

    }
    static div (a, b) {
        return a / b

    }

    static raiz (a) {
        return Math.sqrt (a)
    }

    static porcent (a, b) {
        return ([a / b] * 100)
    }
}
