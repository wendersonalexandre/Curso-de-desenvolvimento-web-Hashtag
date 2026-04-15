// Exercircio 01- Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.

const cardapioLanchonete = [
    "Hambúrguer",
    "Pizza",
    "Cachorro-quente",
    "Salgado",
    "Refrigerante",
    "batata frita"
]; 

function contarItensCardapio(cardapio){
    if(cardapio.length === 0){
         return 0;
    } else{
        cardapio.pop();
        return 1  + contarItensCardapio(cardapio);
    }
}

//const totalItens = contarItensCardapio(cardapioLanchonete);
//console.log(`O cardápio da lanchonete tem ${totalItens} itens diferentes.`);


// Exercircio 02 - Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.

const totalVendasMes = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150];

const precoHamburguer = 10;

function calcularVendasHamburguer(vendasMes, precoitem,dia){
    // CASO BASE - PONTO DE PARADA
    if(dia >= vendasMes.length){
        return 0;
    }

    // CASO RECRSIVO 
    const valorVendaMensal = vendasMes[dia] * precoitem;
    const valorDaProximoDia = calcularVendasHamburguer(vendasMes, precoitem, dia + 1);

    return valorVendaMensal + valorDaProximoDia;
}

const totalDeVendas = calcularVendasHamburguer(totalVendasMes, precoHamburguer, 0);
//console.log(`O valor total das vendas no mes: R$${totalDeVendas}.`);

// Exercircio 03 - Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços. Crie um programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.

const cardapio = {
    Hamburquer:10,
    BatataFrita: 5,
    Refirgerante:2,
    MIlkShake: 8
};

function listarItensDoCardapio(cardapio){
    for( const item in cardapio){
         console.log(`${item}: R$${cardapio[item]}`);
    }
} 
//listarItensDoCardapio(cardapio);

//Exercircio 04 - Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e quantidades) e calcule o valor total da conta.

const precosCardapio = {
    hamburguer: 24,
    batataFrita: 8,
    CocaLataZero: 4
}

const PedidoCliente = {
    hamburguer: 1,
    batataFrita: 1,
    CocaLataZero: 1
};

function calcularCompraCliente(Cardapio, pedidoCliente){
    let valorTotalCompra = 0;
    for(const item in pedidoCliente ){
        //item = Hamnburguer
        if(item in Cardapio){
            //item = hamburguer
            valorTotalCompra += Cardapio[item] * pedidoCliente[item];
        }
        return valorTotalCompra;
    }
}
const total = calcularCompraCliente(precosCardapio,PedidoCliente);
//console.log(`O valor total da compra foi de R$ ${total}`);

// Exercircio 5: Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use um loop for...of para listar todos os itens do cardápio.

const cardapioLanchonete2 = [
    "Hambueguer",
    "Pizza",
    "Nuggets",
    "MilkShake",
    "Refrigerante",
    "Batata Frita"
];

function listarItens(cardapio){
    for(let itens of cardapio){
        console.log(itens);
    }
}
//listarItens(cardapioLanchonete2);


// Exercircio 06 - Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o valor total da conta.

const cardapio2 = {
    Hamburguer: 24,
    batataFrita: 8,
    CocaLataZero: 4
};

const pedidoCliente = [
    {nome: "Hamburguer", quantidade: 2},
    {nome: "BatataFrita",quantidade:1},
    {nome:"CocaLataZero", quantidade:1}
];

function calcularTotalDaConta(cardapio,pedidoCliente){
    let totalConta = 0;

    for(const pedido of pedidoCliente){
         if(pedido.nome in cardapio){
            totalConta += cardapio[pedido.nome] * pedido.quantidade;
         }
    }
    return totalConta;
}
const informacoes = calcularTotalDaConta(cardapio2,pedidoCliente);
console.log(informacoes);


