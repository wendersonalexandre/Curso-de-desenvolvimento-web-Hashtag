//  1: Converta valores de texto em números Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é convertê-los para números reais.

const valorTexto1 = "150.50";
const valorTexto2 = "200px";
const valorTexto3 = "abc";

const numero1 = Number.parseFloat(valorTexto1);
const numero2 = Number.parseInt(valorTexto2);
const numero3 = Number(valorTexto3);
console.log(numero1, numero2, numero3); // Saída: 150.5 200 NaN

console.log("_________________________________");

//  2: Somar valores numéricos de uma entrada de formulário Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.

const input1 = "10";
const input2 = "20.5";
const soma = Number(input1) + Number(input2);
console.log(soma); // Saída: 30.5

console.log("_________________________________");

// 3: Arredonde valores financeiros Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas casas decimais.

const valorFinanceiro = 1236.456789;
const valorAjustado = valorFinanceiro.toFixed(2);

console.log(valorAjustado); // Saída: 123.46

console.log("_________________________________");

// 4 - 4: Ajustar a precisão de um número Você tem um número muito grande e precisa exibi-lo com uma precisão específica.

const numeroGrande = 12345.6789;
const numeroPreciso = numeroGrande.toPrecision(4);
console.log(numeroPreciso); // Saída: 1e+4

console.log("_________________________________");

// 5 -  Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de realizar qualquer operação.

const entradaUsuario = "123abc";
const entradaValida = "123";

const entradaConvertida = Number(entradaUsuario);
const entradaValidaConvertida = Number(entradaValida);
console.log(entradaConvertida + " Entrada valida, valor não é um número"); // Saída: NaN
console.log(entradaValidaConvertida + " Entrada valida, valor é um número"); // Saída: 123

//segunda forma

console.log(Number.isNaN(entradaConvertida) === false); // Saída: false
console.log(Number.isNaN(entradaValidaConvertida) === false); // Saída: true

console.log("_________________________________");

// 6 -  Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos

const valor1 = 1 / 0; // Infinity
const valor2 = NaN; // NaN
const string = "abc"

console.log(Number.isFinite(valor1)); // Saída: false
console.log(Number.isFinite(valor2)); // Saída: false
console.log(Number.isFinite(string)); // Saída: false