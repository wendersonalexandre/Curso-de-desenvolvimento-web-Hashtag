function saudacao(nome){
    return `Olá, ${nome}`;
}

console.log(saudacao("Wenderson"));

const pessoa = {
    nome: "Wenderson",
    saudacao: function(){
        return `Olá, ${pessoa.nome}`;
    }
}

console.log(pessoa.saudacao());