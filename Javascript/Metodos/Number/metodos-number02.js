let flutuanteString = "32.7869";
let inteiroString = "42";

// converter o valor (geralmente string) para número.
console.log(Number.parseFloat(flutuanteString));
console.log(Number.parseInt(inteiroString));

// converter um inteiro para uma string.

let numero = 42; // base decimal
console.log(numero.toString());
console.log(numero.toString(10)); // base decimal
console.log(numero.toString(2)); // base binária
console.log(numero.toString(8)); // base octal

// converter uma string para um npumero inteiro, considerando a base númerica.

console.log(Number.parseInt(flutuanteString, 10));
console.log(Number.parseInt(inteiroString));
console.log(Number.parseFloat(flutuanteString).toFixed(2));