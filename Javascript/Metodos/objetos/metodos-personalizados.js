const calculadora = {
  valor1: 0,
  valor2: 0,

  definirValores: function (v1, v2) {
    this.valor1 = v1;
    this.valor2 = v2;
  },

  somar: function () {
    return this.valor1 + this.valor2;
  },
  subtrair: function () {
    return this.valor1 - this.valor2;
  },
  multiplicar: function () {
    return this.valor1 * this.valor2;
  },
  dividir: function () {
    return this.valor1 / this.valor2;
  },
};

// Exemplo de uso:

calculadora.definirValores(10, 5);
console.log("Soma: " + calculadora.somar()); // Soma: 15
console.log("Subtração: " + calculadora.subtrair()); // Subtração: 5
console.log("Multiplicação: " + calculadora.multiplicar()); // Multiplicação: 50
console.log("Divisão: " + calculadora.dividir()); // Divisão: 2