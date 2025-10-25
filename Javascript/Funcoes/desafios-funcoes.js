//1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do cálculo).

function mediaNotas(nota1, nota2, nota3) {
    const mediaAluno = (nota1 + nota2 + nota3) / 3;
    console.log(`a média desse aluno é ${mediaAluno}`);
}

mediaNotas(10,2,7);


//  2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3 primeiras provas + a nota da prova final. 

function notasFinal(nota1,nota2,nota3){
    let mediaProvaFinal = (nota1 + nota2 + nota3) / 3
    return mediaProvaFinal;
}

function calculaMediaFinal(nota1,nota2,nota3,notapf){
    const mediaSemPf = notasFinal(nota1,nota2,nota3);
    const mediaFinal = (mediaSemPf + notapf) / 2;
    console.log(`A media da prova final desse aluno é ${mediaFinal}`);
}

calculaMediaFinal(3,5,7,8);


// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na tela o texto:
//  a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
//  Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

function calcularTemperatura(temperaturaCelsius){
    let temperaturaParaFar = (9/5)*(temperaturaCelsius)+32;
    console.log(`a temperatura correspondente em Farenheit é de ${temperaturaParaFar}ºF `)
}

calcularTemperatura(30);


// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto é de 8,875% em cima do valor do produto.


function calcualarPorcentagemImposto(valorProduto){
    const porcentagem = 8.875 / 100;
    const valorSobProfuto = valorProduto * porcentagem;
    console.log(`O valor a ser pago é ${valorProduto + valorSobProfuto}`);
}

calcualarPorcentagemImposto(150);