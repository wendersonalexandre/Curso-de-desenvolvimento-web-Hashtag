let frutas = ["maçã","melão","manga"];
console.log(frutas.includes("maçã")); // Retorna um boleano se estiver o elemento na lista 
console.log(frutas.includes("kiwi")); // retorna false

// EVERY - todos os elementos
console.log(frutas.every(
    function(fruta){
        return fruta.includes("m");
    }
))

// SOME - algum elemento

console.log(frutas.some(
    function(fruta){
        return fruta.includes("l");
    }   
))

console.log(frutas.join(" "));