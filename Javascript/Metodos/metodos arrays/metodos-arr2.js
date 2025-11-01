let letras = ["d","g","f","a","b","c","h","e"];
let numeros = [1,4,5,6,7,8,20,2];

letras.sort(); // ornando os elementos
console.log(letras);
letras.reverse(); // revertr os elementos
console.log(letras); 

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

let mesclaArr = letras.concat(numeros);
console.log(mesclaArr);