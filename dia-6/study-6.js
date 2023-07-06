let congelados = [];
let doces = [];
let frutas = [];
let laticinios = [];
let comida = "";
let tipo = "";
let comidaRemovida = "";
let tipoRemovido = "";

let adicionar = "sim";
let remover = "sim";

while (adicionar != "não") {
    adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite 'sim' ou 'não'.");
    while (adicionar != "sim" && adicionar != "não") {
        alert("Operação não reconhecida!");
        adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite 'sim' ou 'não'.");
    }

    if (adicionar === "não") {
        break;
    }

    comida = prompt("Qual a comida que gostaria de adicionar?");
    tipo = prompt("Em qual categoria essa comida se encaixa? Congelados, doces, frutas ou laticínios?");

    while (tipo != "congelados" && tipo != "doces" && tipo != "frutas" && tipo != "laticínios") {
        alert ("Categoria não definida!");
        tipo = prompt("Em qual categoria essa comida se encaixa? Congelados, doces, frutas ou laticínios?");
    }
    if (tipo === "congelados") {
        congelados.push(comida);
    }
    else if (tipo === "doces") {
        doces.push(comida);
    }
    else if (tipo === "frutas") {
        frutas.push(comida);
    }
    else if (tipo === "laticínios") {
        laticinios.push(comida);
    }

    if (adicionar == null || comida == null || tipo == null){
        break;
    } 
}

if (congelados.length !== 0 && doces.length !== 0 && frutas.length !== 0 && laticinios.length !== 0) {
    alert(`Lista de compras:\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}\n Laticínios: ${laticinios}`);
}


while (congelados != [] && doces != [] && frutas != [] && laticinios != [] && remover != "não") {
    remover = prompt("Você gostaria de remover algum item da sua lista? Digite 'sim' ou 'não'.");
    while (remover != "não" && remover != "sim") {
        alert("Operação não reconhecida!");
        remover = prompt("Você gostaria de remover algum item da sua lista? Digite 'sim' ou 'não'.");
    }

    if (remover === "não") {
        alert("Certo! Obrigado por usar nosso aplicativo!");
        break;
    }

    comidaRemovida = prompt("Qual comida deseja remover? Digite da mesma forma que digitou ao inseri-la");
    tipoRemovido = prompt("Qual a categoria da comida? Digite da mesma forma que digitou ao inseri-la");

    while (tipo != "congelados" && tipo != "doces" && tipo != "frutas" && tipo != "laticínios") {
        alert ("Categoria não definida!");
        tipoRemovido = prompt("Em qual categoria essa comida se encaixa? Congelados, doces, frutas ou laticínios?");
    }
    
    if (tipoRemovido === "congelados") {
        let index = congelados.indexOf(comidaRemovida);
        
        if (index > -1) {
            congelados.splice(index, 1);
        }
    }
    else if (tipoRemovido === "doces") {
        let index = doces.indexOf(comidaRemovida);
        
        if (index > -1) {
            doces.splice(index, 1);
        }
    }
    else if (tipoRemovido === "frutas") {
        let index = frutas.indexOf(comidaRemovida);
        
        if (index > -1) {
            frutas.splice(index, 1);
        }
    }
    else if (tipoRemovido === "laticínios") {
        let index = laticinios.indexOf(comidaRemovida);
        
        if (index > -1) {
            laticinios.splice(index, 1);
        }
    }
}

if (congelados.length !== 0 && doces.length !== 0 && frutas.length !== 0 && laticinios.length !== 0) {
    alert(`Lista de compras:\n Congelados: ${congelados}\n Doces: ${doces}\n Frutas: ${frutas}\n Laticínios: ${laticinios}`);
}
