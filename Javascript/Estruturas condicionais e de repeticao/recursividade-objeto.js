// Exemplo de objeto simples
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    peças: {
        portas: 4,
        pneus: "Michelin",
        airbags: true
    }
};

// Função recursiva para imprimir propriedades do objeto
function imprimirObjeto(objeto){
    // Obter chaves do objeto
    const keys = Object.keys(objeto);

    // Caso base: se não houver mais chaves, retornar
    if(keys.length === 0){
        return; // interrompe a recursão
    };

    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        const value = objeto[key];  

        if(typeof value === 'object'){
            imprimirObjeto(value); // chamada recursiva para objetos aninhados
        } else {
            console.log(`${key}: ${value}`); // imprimir chave e valor
        }
    }
}

imprimirObjeto(carro);



 