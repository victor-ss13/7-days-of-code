let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual sua idade?");
let linguagem = prompt("Qual linguagem de programação você está aprendendo?");

let mensagem1 = `Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}!`;

alert(mensagem1);

let duvida = prompt(`Você gosta de estudar ${linguagem}? Digite 1 para SIM e 2 para NÃO.`);

if (duvida == 1) {alert("Muito bom! Continue estudando e você terá muito sucesso.")}
else if (duvida == 2) {alert("Ahh que pena... Já tentou aprender outras linguagens?")};
