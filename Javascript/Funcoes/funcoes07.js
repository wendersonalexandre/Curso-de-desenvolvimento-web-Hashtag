// funções de alta ordem

// - Recebem uma ou mais funções como argumento
function applicarOperacao(x, operacao) {
  // função de alta ordem
  return operacao(x);
}

function dobrar(num) {
  return num * 2;
}

const resultado = applicarOperacao(10, dobrar);
console.log(resultado);


// - Recebem uma função como resultado
function criarIncrementador(incremento) {
  // função de alta ordem
  return function (numero) {
    return numero + incremento;
  };
}

const incrementarPor2 = criarIncrementador(2);
console.log(incrementarPor2(8));
