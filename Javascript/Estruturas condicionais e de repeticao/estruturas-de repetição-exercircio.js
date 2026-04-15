// 1 - calcular o total de vendas de hamburgueres em uma semana, cada um custa 10, criar um programa que calcule o total de vendas em uma semana.

let vendasPorDia = [10, 15, 20, 25, 30, 35, 40]; // vendas de cada dia da semana.
let precoPorHamburguer = 10;

function calcularFatSemanal(vendas) {
  let faturamentoSemanal = 0;
  
  for(let i = 0; i < vendas.length; i++){
    faturamentoSemanal += vendas[i] * precoPorHamburguer;
  }
  return faturamentoSemanal;
}

const calculoFaturamentoTotal = calcularFatSemanal(vendasPorDia);
//console.log(`O faturamento total da semana é: R$ ${calculoFaturamentoTotal}`);

// 2- Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo.

let cardapio = [
  {nome: 'Hamburguer', preco: 13.5},
  {nome: 'Batata Frita', preco: 7.0},
  {nome: 'Refrigerante', preco: 5.0},
  {nome: 'Milkshake', preco: 10.0}
];

function exibirCardapio(cardapio){

  console.log('Cardápio da Lanchonete:');

  for(let i = 0; i < cardapio.length; i++){
    console.log(`${cardapio[i].nome}: R$ ${cardapio[i].preco}`);
  }   
}
//exibirCardapio(cardapio);



// 3 - Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da lanchonete.

function realizarVendas(totalDeVendas){
  let dinheroRecebido = 0;
  let vendasRealizadas = 0;
  let vendasConcluidas = false;

  while(!vendasConcluidas){
    const valorDaVenda = 20;

    //SIMULAR VENDA
    dinheroRecebido += valorDaVenda;
    vendasRealizadas++;

    //VERIFICAÇÃO SE AS VENDAS ATINGIRAM O NUMERO.
    if(vendasRealizadas >= totalDeVendas){
      vendasConcluidas = true;
    }
  }
  console.log(`O total de dinheiro recebido: ${dinheroRecebido}`)
}

const totalDeVendasHOje = 8;
//realizarVendas(totalDeVendasHOje);



// 4- Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.

const pedidosPendentes = [
  'Hamburguer',
  'Batata Frita',
   'Refrigerante',
    'Milkshake'
  ];

function realizarEntregas (pedidosPendentes){
  let pedidoAtual = "";
  let totalDepedidosDoDia = 0;
  console.log("Iniciando as entregas...");

  while(pedidosPendentes.length > 0){
    pedidoAtual = pedidosPendentes.shift();
    totalDepedidosDoDia++;
    console.log(`Entregando: ${pedidoAtual}`);
  }
};
//realizarEntregas(pedidosPendentes);

// 5 - Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes tentem adivinhar o número secreto.


function advinharNumero(){
  let numeroSecreto = Math.floor(Math.random() * 10 + 1).toFixed(0);
  let tentativa;
  let tentativas = 0;

  do{
    tentativa = Math.floor(Math.random() * 10 + 1).toFixed(0);
    tentativas++;

    if(tentativa == numeroSecreto){
      console.log(`Parabéns! Você adivinhou o número secreto ${numeroSecreto} em ${tentativas} tentativas!`);

    }
  } while(tentativa != numeroSecreto);

}
//advinharNumero();


// 6 - Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o processo.

const estoqueLanchonete = {
  hamburguer:20,
  cocaCola:30,
  refigerante:50,
  batataFrita:20
};

function AtualizarEstoque(estoque,itemFalta,quantidadeAdicionar){
  if(estoque.hasOwnProperty(itemFalta)){
    estoque[itemFalta] += quantidadeAdicionar;
    console.log(`Estoque atualizado: ${itemFalta}: ${estoque[itemFalta]}`);
  } else{
    console.log(`O item ${itemFalta} não foi encontrado no estoque.`);
  }
}

console.log("Estoque da Lanchonete");
console.log(estoqueLanchonete);

let continuarAdicionando = true;
let itemEncontrado = false;

do{
  const itemFalta = "hamburguer";
  const quantidadeAdicionar = 2;

  if(!estoqueLanchonete.hasOwnProperty(itemFalta)){
    // Se o item nao existe no estoque, exiba uma mensagem
    if(!itemEncontrado){
      console.log(`O item não foi encontrado`);
      itemEncontrado = true;
    }
  } else if(estoqueLanchonete[itemFalta] + quantidadeAdicionar > 50){
    // se o item hamburguer ultrapassar o limite de 50, exiba uma mensagem

    continuarAdicionando = false;
    console.log(`Limite do estoque ${itemFalta}: ${estoqueLanchonete[itemFalta]} foi atingido!.`);
  } else{
    AtualizarEstoque(estoqueLanchonete, itemFalta, quantidadeAdicionar);
  }
} while(continuarAdicionando); 

console.log("Estoque atualizado da Lanchonete");
console.log(estoqueLanchonete);




