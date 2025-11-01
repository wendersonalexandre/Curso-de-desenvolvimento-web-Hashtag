// 1-   Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final, remova o primeiro item e exiba o carrinho atualizado.

let produtos = ['Produto A', 'Produto B'];
produtos.push(" Produto C");
produtos.shift()
console.log(produtos);

// ------------------------------------------------------------

//  2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos disponíveis.

let produtos2 = ['Produto X', 'Produto Y'];
let novosProdutos = ['Produto A', 'Produto B'];
produtos2.push("produto Z");
let novoarr = produtos2.concat(novosProdutos);
console.log(novoarr);

// ------------------------------------------------------------

// 3:  Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e 'Agenda' estão presentes no estoque.

let produtos3 =  ['Caderno', 'Lápis', 'Estojo'];
console.log(produtos3.includes("Lápis"));
console.log(produtos3.includes("Agenda"));

// ------------------------------------------------------------

//  4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior que 7.

let arr1 =  [2, 5, 8, 1];
let result = arr1.some((numero) => numero > 7);
console.log(result);


// -------------------------------------------------------------

//  5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.

let arr2 = [4, 6, 8, 2];
let resultado = arr2.every((num) => num > 3);
console.log(resultado);

