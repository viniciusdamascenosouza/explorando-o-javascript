console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis: ");

// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
);

listaDeDestinos.push(`Florianópolis`); //Adicionando item ao final do array
listaDeDestinos.splice(2, 2); //Removendo itens
listaDeDestinos.shift(); //Removendo primeiro elemento
listaDeDestinos.pop(); //Removendo último elemento

console.log(listaDeDestinos)