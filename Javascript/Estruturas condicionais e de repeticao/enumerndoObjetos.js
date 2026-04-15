const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  automatico: true,
  preco: 95000,
  motor:1.0,
  turbo: false
};

for (info in carro){
    console.log(info + ": " + carro[info]);
}