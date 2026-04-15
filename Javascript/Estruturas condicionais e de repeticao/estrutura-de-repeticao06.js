let reproduzido = true;
let entrada = 2; // Simulando a entrada do usuário. Pode ser 1 (Pausar) ou 2 (Sair do filme)

function reproduzirFilme() {
    console.log("Aperte o play :)");
}

function pausarFIlme() {
    console.log("Filme pausado");
}

function sairFilme(){
    console.log("Saindo do filme");
}

function opcoesConfiguracao(entrada){
    do{
        console.log("Opções de configuração: 1- Pausar | 2- Sair do filme");

        if(entrada == 1){
            pausarFIlme();
            reproduzido = false;
        } else if(entrada == 2){
            sairFilme();
            reproduzido = false;
        } else {
            console.log(
                "Opção inválida. Por favor, escolha uma opção válida."
            )
        }

    } while(reproduzido);
}

reproduzirFilme();
opcoesConfiguracao(entrada);