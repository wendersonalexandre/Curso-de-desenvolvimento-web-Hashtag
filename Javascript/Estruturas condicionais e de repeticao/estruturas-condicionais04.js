const usuario = { nome: "Daniel", idade: 22, time: "Sport" };
const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Rubro-negro";
const mensagemDeBoasVindas3 = "BEm vindo, torcedor Vascaíno";
const mensagemDeBoasVindasGeral = "Bem vindo, amante do esporte!"; 

usuario.time == "Fluminence" && usuario.idade >= 18
? console.log(mensagemDeBoasVindas1)
: usuario.time == "Flamengo"
? console.log(mensagemDeBoasVindas2)
: usuario.time == "Vasco"
? console.log(mensagemDeBoasVindas3)
: console.log(mensagemDeBoasVindasGeral);

const mensagemDeEscolha = "Clique no setor para qual deseja comprar seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã!!!";

console.log(mensagemDeEscolha)
console.log(mensagemFinal)