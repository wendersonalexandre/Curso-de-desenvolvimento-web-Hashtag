//split(delimiter[,limit]);

let texto = "maça      banana laranja     uvas";
//let frutas = texto.split(",");
//let frutasLimite = texto.split(",",3);
//let frutas0 = texto.split();

let frutas = texto.split(/\s+/);

console.log(frutas);