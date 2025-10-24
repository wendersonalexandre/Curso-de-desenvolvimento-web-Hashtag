//function nomeFunction(parametro){instrucao}

function soma(num1,num2){
    console.log(num1 + num2);
}

soma(10,5);

function calcularPrecoTotal(precoUnitario, quantidade){
    let total = precoUnitario * quantidade;
    console.log(`o total da sua compra é ${total}`);
}

let camiseta = 30;
let quantidadeItem = 3

calcularPrecoTotal(camiseta, quantidade);