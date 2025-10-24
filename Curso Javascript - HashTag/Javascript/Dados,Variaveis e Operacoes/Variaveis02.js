// Redeclarações
let nome = "Millene"; // ERRO
const nomeProfessor = "Daniel"; // ERRO

var mensagem = "Olá";
console.log(mensagem);
var mensagem = "Bem vindo!";
console.log(mensagem);

// Reatribuições - Multabilidade
nome = "Lira";
console.log(nome);

mensagem = "Olá bem vindo!";
console.log(mensagem);

// Hoisting
var segundaMensagem; // não atribui nenhum valor
console.log(segundaMensagem);
segundaMensagem = "Ultilizando Hoisting";
console.log(segundaMensagem);

//console.log(terceiraMensagen)  ERRO - não foi inicializada
//const terceiraMensagen = "Olá eu sou let";

// Visibilidade

{
    console.log("Isso é um bloco")
    let idade =  50;
    let real = 60;
}
//function() {instruções - tarefas especificas}

function executar(){
    // intruções dentro da função

    var numero = 10;
    console.log(numero);
}
executar()
