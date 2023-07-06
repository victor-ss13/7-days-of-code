//Variáveis para as operações
let valor1 = "";
let valor2 = "";

let resultado = "";

//Funções
function soma() {
    valor1 = prompt("Insira o primeiro valor");
    valor2 = prompt("Insira o segundo valor");

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);        

    resultado = valor1 + valor2;
    alert(resultado);
}

function subtrai() {
    valor1 = prompt("Insira o primeiro valor");
    valor2 = prompt("Insira o segundo valor");

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);    

    resultado = valor1 - valor2;
    alert(resultado);
}

function multiplica() {
    valor1 = prompt("Insira o primeiro valor");
    valor2 = prompt("Insira o segundo valor");

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);    

    resultado = valor1 * valor2;
    alert(resultado);
}

function divide() {
    valor1 = prompt("Insira o primeiro valor");
    valor2 = prompt("Insira o segundo valor");

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);    

    resultado = valor1 / valor2;
    alert(resultado);
}

function sair() {
    alert("Até a próxima!");
}

let calcular = "sim";

while (calcular != "não") {
    calcular = prompt("Gostaria de realizar qual operação? Soma, subtração, multiplicação, divisão ou gostaria de sair?");

    while (calcular != "sair" && calcular != "soma" && calcular != "subtração" && calcular != "multiplicação" && calcular != "divisão") {
        alert("Operação não reconhecida");
        calcular = prompt("Gostaria de realizar qual operação? Soma, subtração, multiplicação, divisão ou gostaria de sair?");
    }
    switch (calcular) {
        case "sair":
            sair();
            break;
        case "soma":
            soma();
            break;
        case "subtração":
            subtrai();
            break;
        case "multiplicação":
            multiplica();
            break;
        case "divisão":
            divide();
            break;
    }
    if (calcular === "sair") {
        break;
    }
}
