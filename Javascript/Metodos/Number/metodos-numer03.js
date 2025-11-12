// NaN (Not a Number) - mais frequencia de resultar

let NotANumber = NaN;
let notANumber2 = 0/0;
let string = Number("ola");
let mensagem = "Olá impressionador";

//console.log(NotANumber, notANumber2, string);

//verifica se o valor é NaN
//console.log(Number.isNaN(NotANumber)); // true
//console.log(Number.isNaN(notANumber2));
//console.log(Number.isNaN(string));
//console.log(Number.isNaN(mensagem)); // false

//isNaN() não verifica se o valor original é NaN; em vez disso, ele verifica se o resutado da conversão do valor é NaN.

//A string não é NaN apos a conversão , mas sim um numero (NaN).

//console.log(Number.isNaN(42));
//console.log(Number.isNaN(42.35422))


// infinity / -Infinity

let infinito = Infinity;
let infinito2 = -1 / 0;
let multiplicacao = Number.MAX_VALUE *2;

console.log(Number.isFinite(infinito));
console.log(Number.isFinite(infinito2));
console.log(Number.isFinite(multiplicacao));
console.log(Number.isFinite(42));
console.log(Number.isFinite("Ola"));
console.log(Number.isFinite(NotANumber));