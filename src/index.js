let nomeHeroi = "Felipao";
let xpInicial = 0;
let xpAtual = "";
let nivelAtual = "";

console.log("Você começará uma grande aventura, Boa sorte!!");

if (xpAtual < 1000) {
  nivelAtual = "Ferro";
} else if (xpAtual > 1001 && xpAtual < 2000) {
  nivelAtual = "Bronze";
} else if (xpAtual > 2001 && xpAtual < 5000) {
  nivelAtual = "Prata";
} else if (xpAtual > 5001 && xpAtual < 7000) {
  nivelAtual = "Ouro";
} else if (xpAtual > 7001 && xpAtual < 8000) {
  nivelAtual = "Platina";
} else if (xpAtual > 8001 && xpAtual < 9000) {
  nivelAtual = "Ascendente";
} else if (xpAtual > 9001 && xpAtual < 10000) {
  nivelAtual = "Imortal";
} else {
  nivelAtual = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelAtual);
