// 01 - Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras maiúsculas.

let textMaiusculo = 'javascript é divertido';
let converterTexto = textMaiusculo.replace("javascript", "javascript".toUpperCase());
console.log(converterTexto);


// 02 - : Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e, emseguida, converta essa palavra para letras minúsculas.

let cortarStr = "Aprendendo Javascript";
let strCortada = cortarStr.substring(0,10).toLowerCase();
console.log(strCortada);

// 03 - Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por “Javascript”

let texto =  "Aprendendo Python";
let extrairPalavra = texto.slice(11);
let fraseNova = texto.replace(extrairPalavra, "Javascript");
console.log(fraseNova);

// 04 - Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de produtos e remova o item 'sofá' da lista.

let textoParaTRansformar =  "cadeira, mesa, sofá, armário";
let arr = textoParaTRansformar.split(", ");
console.log(arr)
arr.splice(arr.indexOf("sofá"), 1);
console.log(arr);
