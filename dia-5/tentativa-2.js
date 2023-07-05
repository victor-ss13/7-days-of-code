let frutas = [];
let congelados = [];
let doces = [];
let laticinios = [];

let comida = "";
let categoria = "";

let adicionar = "sim"; //Começa como sim para iniciar o loop

while (adicionar != "não") {
    //Importante ressaltar a inserção do primeiro prompt dentro do laço de repetição. Eu estava fazendo isso errado
    adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite 'sim' ou 'não'.");

    //Evitando do usuário prosseguir sem colocar uma resposta válida
    while (adicionar != "não" && adicionar != "sim") {
        alert("Operação não reconhecida!");
        adicionar = prompt("Digite 'sim' ou 'não'.");
    }
    //Instrução caso o usuário não quera utilizar o lista ou já tenha utilizado o suficiente
    if (adicionar === "não") {
        alert("Obrigado por usar nosso aplicativo!");
        break;
    }

    //Atribuindo valor as variáveis vazias
    comida = prompt("Qual a comida que você gostaria de adicionar?");
    categoria = prompt("Essa comida se encaixa melhor em qual categoria de alimentos? Frutas, congelados, doces ou laticínios?");

    //Instrução caso o usuário tenha prossguido com o uso da lista. O local de inserção da comida vai depender de sua categoria
    if (categoria === "frutas") {
        frutas.push(comida);
    }
    else if (categoria === "congelados") {
        congelados.push(comida);
    }
    else if (categoria === "doces") {
        doces.push(comida);
    }
    else if (categoria === "laticínios") {
        laticinios.push(comida);
    }
    //Instrução para o caso de uso de uma categoria não definida pelo programa
    else {
        alert("Categoria não definida!")
    }
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Congelados: ${congelados}\n Doces: ${doces}\n Laticínios: ${laticinios}`)
