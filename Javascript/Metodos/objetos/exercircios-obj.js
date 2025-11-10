// 1 - Crie um objeto chamado Venda com as propriedades produto, quantidade, precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o valor total da venda, considerando o desconto. Adicione também um método chamado detalharVenda que retorne uma string detalhando a venda.

const vendas = {
  produto: "Celular",
  quantidade: 2,
  precoUnitario: 1500,
  desconto: 0, // 10% de desconto

  calcularTotal: function () {
    let totalVenda = this.quantidade * this.precoUnitario; //3000
    let descontoAplicado = totalVenda * this.desconto; // 300
    return totalVenda - descontoAplicado; // 3000 - 300 = 2700
  },

  detalharVenda: function () {
    return`Produto: ${this.produto},
        Quantidade: ${this.quantidade},
        Preço Unitário: R$${this.precoUnitario.toFixed(2)}, 
        Desconto: ${(this.desconto * 100).toFixed(0)}%,
        Total da Venda: R$${this.calcularTotal().toFixed(2)}`;
  },
};


// 2 - Adicione um método ao objeto Venda chamado aplicarDesconto que recebe umvalor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o valor total com o método calcularTotal.

vendas.aplicarDesconto = function (percentual) {
    this.desconto = percentual;
}

// 3 - Adicione um método ao objeto Venda chamado atualizarQuantidade que recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e verifique o total da venda após a atualização.

vendas.atualizarQuantidade = function (novaQuantidade) {
    this.quantidade = novaQuantidade;
}
/* vendas.atualizarQuantidade(3); 
vendas.aplicarDesconto(0.1);  */// Aplicando 10% de desconto

// 4 - Adicione um método chamado verificarEstoque que recebe a quantidade disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada ou se é necessário ajustar a quantidade.

vendas.verificarEstoque = function (estoqueDisponivel){
    return `Verificação comcluida. ${this.quantidade <= estoqueDisponivel}`
}
vendas.verificarEstoque(5); // Venda pode ser realizada.


// 5-  Retorne um array com todas as suas propriedades e valores do objeto Venda. Exiba as propriedades e valores em um formato legível.

const entradas = Object.entries(vendas);
//console.log(entradas)

// 6- Obtenha um array com os nomes de todas as propriedades do objeto Venda. Exiba as propriedades do objeto.

const propriedades = Object.keys(vendas);
//console.log(propriedades);

// 7 - Obtenha um array com todos os valores das propriedades do objeto Venda. Exiba os valores das propriedades.

const valores =  Object.values(vendas);
//console.log(valores);

// 8 -  Verifique se o objeto Venda possui a propriedade desconto. Retorne a verificação diretamente em uma mensagem fixa.

function verificarPropriedade(){
  return `Verificação concluida: ${vendas.hasOwnProperty('desconto')}`;
}
const resultado = verificarPropriedade();
//console.log(resultado);

// 9 - Crie um novo objeto NovaVenda que contenha as mesmas propriedades e valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto NovaVenda.

const novaVenda = Object.assign({}, vendas, {
  produto: "PC gamer",
  quantidade: 2
});

//console.log(novaVenda);

// 10 -  Adicione uma nova propriedade data ao objeto Venda, definindo-a como não enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da nova propriedade data separadamente.

Object.defineProperty(vendas, "data", {
  value: "2024-10-01",
  enumerable: false
})

// 11-  Crie um novo objeto DescontoEspecial que herde as propriedades do objeto Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique se o desconto foi aplicado corretamente.

 const descontoEspecial = Object.create(vendas);
 descontoEspecial.desconto = 0.2; // 20% de desconto
 console.log(descontoEspecial.detalharVenda());


// 12- Remova a propriedade desconto do objeto Venda. Verifique se a propriedade foi removida com sucesso e exiba as propriedades restantes do objeto

delete vendas.desconto;