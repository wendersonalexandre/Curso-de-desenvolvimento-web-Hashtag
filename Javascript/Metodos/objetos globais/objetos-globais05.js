// DATE
const dataAtual = new Date(); // criando uma instância do objeto Date.
console.log(dataAtual.getFullYear()); // obtendo o ano atual.
console.log(dataAtual.getMonth()); // mes atual (0-11)
console.log(dataAtual.getDate()); // dia do mês atual 
console.log(dataAtual.getHours()); // hora atual
console.log(dataAtual.getMinutes()); // minutos atuais
console.log(dataAtual.getSeconds()); // segundos atuais


//TIMESTAMP - representação numérica de uma data - data referencia - data 1 de janeiro de 1970.
let timestamp = dataAtual.getTime(); // obtendo o timestamp (milissegundos desde 1 de janeiro de 1970)
console.log(dataAtual);
console.log(timestamp);

