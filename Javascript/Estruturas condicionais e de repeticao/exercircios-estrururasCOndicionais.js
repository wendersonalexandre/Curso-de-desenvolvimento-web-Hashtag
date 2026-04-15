// 01 - crir um programa que verifique se a compra do cliente é maior que 100 reais, se for maior, aplicar um desconto de 10% no valor da compra. deve retorna uma mensagem informando s eo clienete tem ou não direito ao desconto e o valor final da compra.

function verificarDesconto(valorCompraCliente) {
    let valorFInal;
    
    if(valorCompraCliente >= 100){
        valorFInal = valorCompraCliente - (valorCompraCliente * 0.1);
        console.log(`Parabens! Você tem um desconto de 10% e sua compra de ${valorCompraCliente} vai ficar por: R$${valorFInal}`)
    } else{
        console.log(`Sua compra de R$${valorCompraCliente} não tem direito ao desconto.`)
    }

}

const valorCompra = 100;
//verificarDesconto(150);

// 02 - escrever um programa para verificar estoque, se a quantidade do produto for maior que 0, informar que o produto está disponível, caso contrário, informar que o produto está indisponível.

function verificarEstoque(quantidadeProduto){
     if(quantidadeProduto > 0){
        console.log(`Produto disponivel ${quantidadeProduto} unidades em estoque. :)`);

     }else{
        console.log("Produto esgotado :(");
     }
}
//verificarEstoque(5);


// 03 - criar um programa que determina a categoria do cliente com base dos seus pontos de fidelidade. a pontuação tem que esta entre 0 e 100, se for maior que 85 o clinte é "premium", se for maior ou igual 50, ele é "Regular ", caso contrario ele é comum.

const pontosDeFidelidade = Math.floor(Math.random() * 100);

function categoriaDeCliente(pontosFidelidade){
    
    if(pontosFidelidade >= 85){
        console.log("Cliente premium");
    } else if (pontosFidelidade >= 50){
        console.log("Cliente regular");
    } else{
        console.log("Cliente comum");
    }
}
//categoriaDeCliente(pontosDeFidelidade);

// 04 - criar um programa para gerinciar as vendas mensais dos vendendores de uma loja.
/* 
"Excelente desempenho" para vendedores que alcaçaram ou passaran da meta.
"MUito  bom desempenho" para vendedores que alcançaram entre 90% e 99% da meta.
"Bom desempenho " (para vendedores com vendas entre 80% e 89% da meta.
 "Desempenho Satisfatório" (para vendedores com vendas entre 61% e 79% da meta).
 "Desempenho Insatisfatório" (para vendedores com vendas abaixo de 60% da meta).
 */

 function desempenhoVendedores(vendasMensais, metaMensal){
    let percentualVendas = (vendasMensais / metaMensal) * 100;
    
    if(percentualVendas >= 100){
        console.log("Excelente desempenho");
    } else if(percentualVendas >= 90 && percentualVendas < 100){
        console.log("Muito bom desempenho");
    } else if( percentualVendas >= 80 && percentualVendas < 90){
        console.log("Bom desempenho");
    } else if(percentualVendas >= 61 && percentualVendas < 80){
        console.log("Desempenho satisfatório");
    } else{
        console.log("Desempenho insatisfatório");
    }
 }

 const vendas = 3000;
 const metaDeVendas = 5000;
 //desempenhoVendedores( vendas, metaDeVendas);

 // 05 - criar um programa que verifique se  um veiculo esta a cima de 70km/h e retorne um boleano

 function verificarVelocidade(velocidade,velocidadeVia){
    let boleano;
    velocidade <= velocidadeVia ? boleano = true: boleano = false
    console.log(boleano)
 }

 const velocidadeVeiculo =  80;
 const velocidadePermitida = 80;
 //verificarVelocidade(velocidadeVeiculo, velocidadePermitida);


 // 06 - criar um programa que verifique a cor do semaforo e retorne a ação correta

 function mensagemSemaforo(corSemaforo){
    corSemaforo === "verde" 
    ? "Você pode continuar com cuidado"
    : corSemaforo === "amarelo" 
    ? "Reduza a velocidade e pare se seguro" 
    : corSemaforo === "vermelho" 
    ?   "Pare o veiculo" 
    : "Cor de semaforo desconhecida"; 
}

 //mensagemSemaforo("vermelho");


 // 07 - criar um programa que receba a cor de semaforo como argumento e retorne a ação correta usando switch case


 function mensagemSemaforoSwitch(corSemaforo){
    let mensagem;
    switch(corSemaforo){
        case "verde":
            mensagem = "Você pode continuar com cuidado";
            break;
        case "amarelo":
            mensagem = "Reduza a velocidade e pare se seguro";
            break;
        case "vermelho":
            mensagem = "Pare o veiculo";
            break;
        default:
            mensagem = "Cor de semaforo desconhecida";
    }

    return mensagem;
 }

//console.log(mensagemSemaforoSwitch("verde"));

// 08 - criar uma função que verifique o ultimo digito da placa de um veiculo que seja de 0 a 9 e retorne a mendagem indicando o dia de rodizio do veiculo.

function verificarPLaca(placaVeiculo){
    let diaRodizio;
    
    switch(placaVeiculo){
        case 1:
        case 2:
            diaRodizio = "Segunda-feira";
            break;
        case 3 :
        case 4:
            diaRodizio = "Terça-feira";
            break;
        case 5:
        case 6:
            diaRodizio = "Quarta-feira";
            break;
        case 7:
        case 8:
            diaRodizio = "Quinta-feira";
            break;
        case 9:
        case 0:
            diaRodizio = "Sexta-feira";
            break;
        default:
            diaRodizio = "Número de placa inválido";
    }

    return diaRodizio;
}
console.log(verificarPLaca(0));
