console.log("Trabalhando com atribuição de variáveis");
// JavaScript é uma linguagem CASE SENSITIVE

// const idade = 20;
const nome = "Vinícius";
const sobrenome = "Damasceno";

// Usando concatenação:
console.log(nome + " " + sobrenome + " tem " + idade + " anos de idade.");

// Criando uma constante para não ser necessário concatenar dentro da template string:
const nomeSobrenome = nome + " " + sobrenome;
console.log(nomeSobrenome);

// Usando template string:
console.log(`Meu nome é ${nomeSobrenome}, e tenho ${idade} anos de idade.`);

// Pórem a melhor forma de fazer é:
console.log(`Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos de idade.`);

let idade; //declarando variável
idade = 20; // atribuindo variável
idade = idade + 1;
console.log(idade);


let contador = 0;
contador = contador + 1;
