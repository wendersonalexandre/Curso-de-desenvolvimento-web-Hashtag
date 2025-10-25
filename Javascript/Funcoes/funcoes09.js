// ESCOPO GLOBAL - LOCAL (FUNÇÃO) - BLOCO

let global = "Sou do escopo Global";

function mensagem() {
    let local = "Sou do escopo Local"
    console.log(local)
}
mensagem();

console.log(global);

if(true) {
    let bloco = "Sou do blodo do IF";
    console.log(bloco);
}