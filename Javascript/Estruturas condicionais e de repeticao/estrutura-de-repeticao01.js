let funcionarios = [
  {
    nome: "João",
    categoria: "veterinario",
    salario: 3500,
    disponivel: true,
  },

  {
    nome: "Wenderson",
    categoria: "Desenvolvedor",
    salario: 4000,
    disponivel: true,
  },

  {
    nome: "Marcelo",
    categoria: "tratador",
    salario: 2500,
    disponivel: false,
  },
];

function listarFuncionarios(categoria) {
  console.log(`Funcionarios na categoria ${categoria}`);
  for (let index = 0; index < funcionarios.length; index++) {
    if (funcionarios[index].categoria === categoria) {
      console.log(funcionarios[index].nome);
    }
  }
}

listarFuncionarios("Desenvolvedor");

// Calcular total gasto em salário

function calcualrSalarios() {
  let totalSalarios = 0;

  for (let i = 0; i < funcionarios.length; i++) {
    totalSalarios += funcionarios[i].salario;
  }
  return totalSalarios;
}

console.log(calcualrSalarios());

// fução para contar os funcionais disponiveis

function funcionariosDisponiveis() {
  let contador = 0;
  for(let index = 0; index < funcionarios.length; index++){
    if(funcionarios[index].disponivel === true){
      contador++;
    }
  }
  return contador;
}
console.log(funcionariosDisponiveis());
