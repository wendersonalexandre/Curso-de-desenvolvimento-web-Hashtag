let frutas = ["maçã", "uva", "laranja"];

console.log(frutas.indexOf("laranja")); // retorna o index do elemento
console.log(frutas.indexOf("lranjta")); // retorna -1, pois o elemento não existe dentro do array

console.log(frutas.splice(0, 1)); // inicio,quantidade de elementos
console.log(frutas.splice(0, 2, 10)); // substituir um elemento - inicio, quantidade, valor substituido
console.log(frutas);
