const produto = {
  nome: "Notebook",
  preco: 2500,
  disponibilidade: true,
};

Object.assign(produto, { emEstoque: 13, categoria: "Eletrônicos" }); // Adiciona novas propriedades ao objeto
//console.log(produto);

Object.defineProperty(produto, "disponibilidade", { value: false }); // Modifica a propriedade existente
//console.log(produto);

const pessoa = {
  nome: "Wenderson",
  idade: 22,
};

const trabalho = {
  profissao: "Desenvolvedor Web",
  cidade: "São Paulo",
};

const funcionario = {};
Object.assign(funcionario, pessoa, trabalho); // copia para um objeto destino
//console.log(funcionario);

Object.defineProperty(funcionario, "salario", {
  value: 2000,
  enumerable: true,
  writable: true,
  configurable: true,
}); // adiciona uma nova propriedade ao objeto

console.log(funcionario);

delete funcionario.salario; // remove a propriedade do objeto
console.log(funcionario);