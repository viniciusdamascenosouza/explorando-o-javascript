console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe.");
        destinoExiste = true;
        break;
    } else{
        destinoExiste = false;
    }
    contador++;
}

console.log("Destino existe: ", destinoExiste);


for (let i = 0 ; i < 3 ; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}