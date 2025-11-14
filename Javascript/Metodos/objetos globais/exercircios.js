// 1-  Você precisa criar uma função que receba um número decimal e o arredonde de três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o resultado de cada arredondamento no console.

let numero = 5.6;
function arredondarNumero(num){
    const cima = Math.ceil(num);
    const baixo = Math.floor(num);
    const maisProximo = Math.round(num);
    console.log(`arredondado para baixo : ${baixo}`);
    console.log(`arredondado para cima : ${cima}`);
    console.log(` arredondado para o valor inteiro mais próximo : ${maisProximo}`);
}
//arredondarNumero(numero)

// 2 - Crie uma função que receba uma lista de números e retorne o valor máximo e o valor mínimo dessa lista.

const lista = [3, 5, 1, 8, 2, 10, -4, 7];

function encontrarValores(lista){
    const numeroMaximo = Math.max(...lista)
    const numeroMinimo = Math.min(...lista)
    console.log(`O valor máximo é: ${numeroMaximo}`);
    console.log(`O valor mínimo é: ${numeroMinimo}`);
}

//encontrarValores(lista);

// 3- Você deve criar uma função que gere três tipos de números aleatórios: um entre 0 e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os resultados no console.

function gerarNumeros(){
    const numeroAte1 = Math.random() ;
    const numeroAte100 = Math.random() * 100;
    const numeroDe50a100 = Math.random() * (100 - 50) + 50;
    console.log(`Aleatorio entre 0 e 1: ${numeroAte1.toFixed(2)}`);
    console.log(`Aleatorio entre 0 e 100: ${numeroAte100.toFixed(2)}`);
    console.log(`Aleatorio entre 50 e 100: ${numeroDe50a100.toFixed(2)}`);

}
//gerarNumeros();

// 4-  Crie uma função que receba duas datas e calcule a diferença entre elas em dias Exiba o resultado no console.

const dataInicial = new Date('2023-01-01');
const dataFinal = new Date('2023-01-31');

function diferencaDatas(dataInicial, dataFinal){
    const diferencaMilissigundos = dataFinal - dataInicial;
    const dias = diferencaMilissigundos / (1000 * 60 * 60 * 24);
    console.log(`A diferença entre ${dataInicial.toDateString()} e ${dataFinal.toDateString()} é de ${dias} dias.`); 
}

//diferencaDatas(dataInicial, dataFinal);

// 5 - Crie uma função que receba uma data e extraia o ano, mês e dia dessa data. Exiba as informações no console.

const data = new Date('2024-06-15');

function extrairData(data){
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1;
    const dia = data.getDate();

    console.log(`Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`);
}
//extrairData(data)


// 6-  Crie uma função que receba a data de nascimento de uma pessoa e calcule sua idade com base na data atual. Exiba a idade no console.

const dataNascimento = new Date('2003-07-04');
const hoje = new Date();

function calcularIdade(dataNascimento, dataAtual){
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    let aniversarioAtual = new Date(
     dataAtual.getFullYear(),
     dataNascimento.getMonth(),
     dataNascimento.getDate()
    ); // ANO / MES / DIA

    let diferenca = (dataAtual - aniversarioAtual) / (1000 * 60 * 60 * 24);

    // ajuste de idade 
    let ajuste = (diferenca < 0) * 1;
    
    idade = idade - ajuste;
    console.log(`A idade é: ${idade} anos.`);
}

//calcularIdade(dataNascimento, hoje);

// 7- : Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano). Exiba o resultado no console.

const dataAt = new Date('2024-06-15');

function formatarData(data){

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const dataFormatada = `${dia} / ${mes} / ${ano}`;

    console.log(`Data formatada no padrão brasileiro: ${dataFormatada}`)
}

formatarData(dataAt)
