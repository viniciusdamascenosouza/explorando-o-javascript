console.log(`Trabalhando com condicionais`);

console.log("Destinos possíveis: ");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
);

listaDeDestinos.splice(1, 1); //removendo item

// const idadeComprador = 15;

function verificaIdadeDoComprador(idade) {
    if (idade >= 18) {
        console.log("Comprador maior de idade.")
    } else {
        console.log("Comprador menor de idade!")
    }
}

verificaIdadeDoComprador(17);

console.log(listaDeDestinos);