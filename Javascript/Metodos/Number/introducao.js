// Number - valores inteiros - inteiros e ponto flutuante

let inteiro = 42;
let numeroPontoFlutuante = 3.45434;
let numeroPontoFlutuante2 = 3.45434;

// verificar se é um numero inteiro
Number.isInteger(inteiro); // true
Number.isInteger(numeroPontoFlutuante); // false

// FOrmatar npumero de acordo com as casas decimais
console.log(numeroPontoFlutuante.toFixed(2)); // 3.45
console.log(numeroPontoFlutuante2.toFixed(3)); // 3.454
console.log(numeroPontoFlutuante2.toFixed()); // 3

// transformar numero com uma precisão especifica
console.log(numeroPontoFlutuante2.toPrecision(4)); // 3.454
console.log(inteiro.toPrecision(1)); // o npumero 42 é arredondado e exibido em notação cientifica 4e+1 
// ou seja, 4 vezes 10 elevado a 1, que é 40
console.log(inteiro.toPrecision(2)); 
console.log(inteiro.toPrecision(3));