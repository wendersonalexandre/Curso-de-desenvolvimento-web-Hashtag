// Parametros Opcionais e Valores padrão

function cumprimentar( saudacao, nome = "visitante") {
    console.log(`Olá ${nome}, ${saudacao}`);
}

cumprimentar("Boa tarde");