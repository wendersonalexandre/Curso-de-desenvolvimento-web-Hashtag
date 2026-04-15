 //Crie uma função que receba dois valores e retorne verdadeiro se ambos forem considerados truthy.

 //(Ou seja, se ambos forem diferentes de 0,null, undefined,false ou "")

 //CompararValores(5,"Texto")
 //CompararValores(0,"Texto")
 //Saida: true _________ false

 //Boolean(false) falsy
 //Boolean(0) falsy
 //Boolean(true) true - truthy
 //Boolean(42) true

 function compararValores(valor1,valor2){
    let booleano = Boolean(valor1 && valor2);
    return booleano;
 }
 console.log(compararValores(5, "Texto")); //true - truthy
  console.log(compararValores(0, "Texto")); //falsy