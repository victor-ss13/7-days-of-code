alert("Bem vindo à Carreira Dev!");

let nome = prompt("Qual o seu nome?");
let area = prompt(`Qual área da programação você deseja seguir ${nome}? Front-End ou Back-End?`);

if (area == "Front-End", "Front-end", "Frontend", "FrontEnd", "frontend") {
    let especial = prompt(`Legal ${nome}! A partir disso em qual tecnologia você gostaria de se aprofundar? React ou VUE? Digite 1 para REACT e 2 para VUE.`);
    
    if (especial == 1) {
        alert("Muito bom! React é uma biblioteca modular, o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação. Siga firme no processo! 👊");
    }
    else if (especial == 2) {
        alert("Muito bom! O VUE é muito usado para criar aplicações SPA (Single Page Applications) e desenvolver vários outros formatos de interfaces com objetivo na interação e experiência do usuário. Siga firme no processo! 👊");
    }
    else{"Não entendi. Use uma tecla válida."}
}

else if (area == "Back-End", "Back-end", "Backend", "BackEnd", "backend") {
    let especial = prompt(`Legal ${nome}! A partir disso em qual outra linguagem de Back-End você gostaria de se aprofundar? C# ou Java? Digite 1 para C# e 2 para JAVA.`);

    if (especial == 1) {
        alert("Ótimo! O C# é uma linguagem multiplataforma. Sendo assim, você pode utilizá-la para desenvolver para plataformas web, dispositivos móveis e aplicações desktop. Siga firme no processo! 👊");
    }
    else if (especial == 2){
        alert("Ótimo! Java é uma linguagem de programação orientada a objetos. Por ser popular no desenvolvimento de sites e aplicativos para qualquer tipo de hardware, é uma das linguagens mais relevantes do meio. Siga firme no processo! 👊");
    }
    else{"Não entendi. Use uma tecla válida."}    
}

else {"Não entendi. Poderia repetir?"};

let aprender = prompt("Existe mais alguma tecnologia que você gostaria de conhecer ou aprender? Digite 1 para SIM e 2 para NÃO");

if (aprender == 1){
    let tecnologia = prompt("Interessante... qual tecnologia seria?");

    while (tecnologia) {
        let pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para SIM e 2 para NÃO.");
        if (pergunta == 1) {
            prompt("Qual tecnologia?");
        }
        else if (pergunta == 2) {
            alert("Tudo bem, siga firme em seus estudos e você terá sucesso!"); 
            break;
        }
    };
}

else if (aprender == 2) {
    alert("Tudo bem, siga firme em seus estudos e você terá sucesso!");
}

else {"Não entendi. Poderia repetir?"};