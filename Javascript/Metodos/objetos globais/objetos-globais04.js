// Classe vs. Instância

class Carro {
  marca = "Toyota";
  modelo = "Corolla";
  ano = 2024;

  ligar() {
    console.log("Carro ligado");
  }

  desligar() {
    console.log("Carro desligado!");
  }

  exibirInformacoes() {
    console.log(
      `O carro é de modelo: ${Carro.modelo} da marca ${Carro.marca}, do ano de ${Carro.ano}`
    );
  }
}

// CLASSE
const newCarro = new Carro(); // criar - Instância
console.log(newCarro.modelo);

// OBJETO SIMPLES
const carro = {
    modelo: "Civic",
    marca: "Honda",
    ano: 2023
};

// OBJETO GLOBAL DATE
console.log(Math);
console.log(new Date()); // classe de javascript

const dataAtual = new Date(); // criando uma instância do objeto Date
console.log(dataAtual);


