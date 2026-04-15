// Simulador de aplicativo de corrida
let nome = "João";
let partida = "Avenida Paulista";
let destino = "Parque Ibirinbeira";

function registrar(nome) {
  while (true) {
    if (nome === "") {
      console.log("Preencha com o nome");
      break;
    } else if (typeof nome !== "string") {
      console.log("Nome inválido, preencha novamente");
      break;
    } else {
      console.log(`Usuário ${nome} registrado com sucesso!`);
      break;
    }
  }
}

function selecionarPonto(partida, destino) {
  console.log("Selecionar o locar de partida e destino:");

  while (partida !== destino) {
    if (partida === "" || typeof partida !== "string") {
      console.log("Local de partida precisa ser informado");
      break;
    } else if (destino === "" || typeof destino !== "string") {
      console.log("Destino inválido, digite o destino correto!");
      break;
    } else {
      console.log("Corrida confirmada!");
      break;
    }
  }

  console.log("Não entrei no while");
}
selecionarPonto(partida, destino);
