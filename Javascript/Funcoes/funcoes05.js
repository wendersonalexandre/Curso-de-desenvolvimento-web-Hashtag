// Retorno de uma função

let pedido = {
    id:1234,
    nome:"João vitor",
    email: "joaovito@gmail.com",
    lenche: 12,
    batataFritas: 6,
    suco:4
}

function enviarNotificacao(nome,idPedido,email){
    // simular pedido de email
    console.log(`Mensagem: ${nome}`);
    console.log(`Enviando email para ${email} confirmando o pedido de numero ${idPedido}`);

}
enviarNotificacao(pedido.nome, pedido.id, pedido.email); // Chamada ou execução


function processarPedido(id, item1,item2,item3){
    // function principal que irá calcular e retornar o valor do pedido.
    let totalPedido = item1 + item2 + item3;
    console.log("Pedido " +id+ " Processado");
    console.log("O total do pedido é:" + totalPedido);
    return totalPedido;
}

let retornoFun = processarPedido(
    pedido.id,
    pedido.batataFritas,
    pedido.lenche,
    pedido.suco
);

console.log(retornoFun);