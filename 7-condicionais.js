console.log(`Trabalhando com condicionais`);

console.log("Destinos possíveis: ");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
);

// Função foi criada para realizar comparações
// os paramêtros passados serão usados posteriomente como "x da questão" para a realização das comparações
function verificaIdadeDoComprador(idade, acompanhante) {
    // se idade for maior ou igual a 18 tudo dentro das chaves serão executados
    if (idade >= 18) {
        // abaixo mensagem que será executada caso a consição seja true:
        console.log("Analíse de solicitação completa: Compra permitida.")
        // o código dentro das chaves do else srão executados caso a condição do if seja false  
    } else {
        //  aqui foi usado um operador condicional ternário, primeiro:
        // se acompanhante for true, ele executa a primeira condição (na sintaxe a segunda)
        // se acompanhante for false, ele executa a segunda condição ( na sintaxe a terceira)
        acompanhante ? console.log("Analíse de solicitação completa: Compra permitida.") : console.log("Acesso negado: menor de idade sem acompanhante!")
    }
}

// Aqui é chamada a função, e dentros dos parenteses são passados os parametros, para todos as condições agirem
// Lembrando que são os parametros que irão definir tudo oq irá acontecer!
verificaIdadeDoComprador(17, true);


// A idéia é realizar uma fiscalização:
// Em uma empresa de pacotes de viagens, só se pode vender para uma menor de idade se o mesmo estiver na presença de uma companhante

// lembrando também que o operador ternário foi usados para treinamento, pois não é uma boa pratica usar um if else e um operador condicional ternário
// juntos em uma mesma função