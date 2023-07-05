let listaCongelados = [];
let listaDoces = [];
let listaFrutas = [];
let listaLaticinios = [];
let tipo = "";

let iniciarLista = prompt("Deseja adicionar um alimento na sua lista de compras? Digite sim ou não");

if (iniciarLista == "Sim", "sim") {
    tipo = prompt("Qual tipo de alimento você gostaria de adicionar? Congelados, doces, frutas ou latícinios?");
}

//Vinicius, minha ideia ali pra cima é trabalhar com várias cadeias de if e else if, coisa que creio poder ser evitada, mas não estou conseguindo pensar em uma forma de fazer isso direito usando laços de repetição