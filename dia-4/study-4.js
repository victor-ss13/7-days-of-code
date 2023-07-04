//Jogo de adivinhação

function aleatoria(max, min) {
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

let numeroSecreto = aleatoria(10, 1);
let numeroChute = 1;
let maxChutes = 4;

//Limitando o número de chutes

alert("Você tem 3 tentativas")
while (numeroChute != maxChutes) {
    let chute = prompt("Digite um número entre 1 e 10")
    if (chute == null) {
        break;
    }
    else if (chute == numeroSecreto) {
        alert("Parabéns! Você acertou! O número secreto é " + numeroSecreto);
        break;
    }
    else if (chute > numeroSecreto) {
        alert("Errou! O número secreto é menor do que " + chute);
        alert("Você já deu " + numeroChute++ + " chute(s)");
        alert("Restam " + (maxChutes-numeroChute) + " chute(s)");
    }
    else if (chute < numeroSecreto) {
        alert("Errou! O número secreto é maior do que " + chute);
        alert("Você já deu " + numeroChute++ + " chute(s)");
        alert("Restam " + (maxChutes-numeroChute) + " chute(s)");
    }
    else if (numeroSecreto) {
         break;
    }
    if (numeroChute == maxChutes) {
        alert("Suas chances acabaram :(");
        break;
    }
    
}