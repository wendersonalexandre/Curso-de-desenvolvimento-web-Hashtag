//Crie uma função qur receba um valor ivestido e uma taxa de juros e retorne o redimento obtido com esse investimento
//Entrada: clacularRendimento(1000,5)
//saida: 50

function clacularRendimento(valorInvestido, taxaJuros){
    let rendimento = valorInvestido * (taxaJuros / 100);
    return rendimento;
}

console.log(clacularRendimento(1000,5));