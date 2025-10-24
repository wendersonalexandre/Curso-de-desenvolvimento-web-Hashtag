// function

//function nomeFunction(){  instrução  }   

function enviarMensagem(){
    console.log("Para continuar você precisa informar o seu nome para o cadastro");
}

// cadastro de usuario

function cadastrarUsuario(nome, sobrenome){
    console.log(`Olá ${nome} ${sobrenome}, você foi cadastrado com sucesso`);
}

// verificar saldo em conta

function banco(deposito, saque){
    let saldo = deposito - saque;
    return saldo;
}


function main(){
    enviarMensagem();
    cadastrarUsuario("Wenderson", "Alexandre");
    let saldo = banco(10000,780);
    console.log(`O saldo atual da sua conta é de: ${saldo}`);  
}
 main()