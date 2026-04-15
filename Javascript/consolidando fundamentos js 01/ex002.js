//Crie uma função que receba um array de nomes e retorne esse array ordenada em ordem alfabetica
//Função: ordenarNomes
//Entrada: ordenarNomes(['Ana','Elias','Carlos','Beatriz]);
//saida: ['Ana','Elias','Carlos','Beatriz]

function ordenarNomes(listaDeNomes){
   return listaDeNomes.sort();
}

let nomes = ['Ana','Elias','Carlos','Beatriz']
console.log(ordenarNomes(nomes));