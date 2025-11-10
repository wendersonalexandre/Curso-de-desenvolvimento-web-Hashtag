const pessoa = {
  cidade: "Recife-PE",
  surf: true,
  falar: function () {
    console.log("Olá!");
  },
};

const carro = {
  modelo: "Honda Civic",
  marca: "Honda",
};

const joao = Object.create(pessoa); // herda as propriedades do objeto pessoa
Object.assign(joao, carro); // copia as propriedades
joao.falar();
console.log(joao.cidade, joao.surf);
joao.nome = "João"; // propriedade nome
joao.idade = 20; // propriedade idade

console.log(joao);
console.log(joao.hasOwnProperty("nome"));
