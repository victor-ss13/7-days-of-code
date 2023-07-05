let listaCongelados = [];
let listaDoces = [];
let listaFrutas = [];
let listaLaticinios = [];
let comida = "";
let tipo = "";

let adicionar = "sim";

while (adicionar != "não") {
    adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite 'sim' ou 'não'.");
    while (adicionar != "sim" && adicionar != "não") {
        alert("Operação não reconhecida!");
        adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite 'sim' ou 'não'.");
    }

    if (adicionar === "não") {
        alert("Certo! Obrigado por usar nosso aplicativo!");
        break;
    }

    comida = prompt("Qual a comida que gostaria de adicionar?");
    tipo = prompt("Em qual categoria essa comida se encaixa? Congelados, doces, frutas ou laticínios?");

    while (tipo != "congelados" && tipo != "doces" && tipo != "frutas" && tipo != "laticínios") {
        alert ("Categoria não definida!");
        tipo = prompt("Em qual categoria essa comida se encaixa? Congelados, doces, frutas ou laticínios?");
    }
    if (tipo === "congelados") {
        listaCongelados.push(comida);
    }
    else if (tipo === "doces") {
        listaDoces.push(comida);
    }
    else if (tipo === "frutas") {
        listaFrutas.push(comida);
    }
    else if (tipo === "laticínios") {
        listaLaticinios.push(comida);
    }

    if (adicionar == null || comida == null || tipo == null){
        break;
    }
}

alert(`Lista de compras:\n Congelados: ${listaCongelados}\n Doces: ${listaDoces}\n Frutas: ${listaFrutas}\n Laticínios: ${listaLaticinios}`);
