var valores = ["50", "44", "100", "-500"];
var valorTotalPConv = 0;
var numeroPontoFlutuante;
for (var y = 0; y < valores.length; y++) {
    if (valores[y] == "") {
        valorTotalPConv = valorTotalPConv + 0;
    }
    else {
        valorTotalPConv = valorTotalPConv + parseFloat(valores[y]);
        console.log("\nEtapa 1 => Valor Total: ", valorTotalPConv);
    }
}
numeroPontoFlutuante = 0;
if (numeroPontoFlutuante == 0) {
    var numeroBinarioConstructor = [];
    var numeroBinarioSinal = "";
    var numeroBinarioResultado = "";
    if (valorTotalPConv < 0) {
        numeroBinarioSinal = numeroBinarioSinal + "1";
        console.warn("\tNúmero é negativo.", numeroBinarioSinal);
        valorTotalPConv = valorTotalPConv * -1;
    }
    if (valorTotalPConv > 0) {
        numeroBinarioSinal = numeroBinarioSinal + "0";
        console.warn("\tNúmero é positivo.", numeroBinarioSinal);
    }
    while (valorTotalPConv >= 2) {
        valorTotalPConv = Math.floor(valorTotalPConv) / 2;
        console.log("\nEtapa 2 => Dividindo para montar o número binário: ", valorTotalPConv);
        if (Number.isInteger(valorTotalPConv) == true) {
            numeroBinarioConstructor.push("0");
            valorTotalPConv = Math.floor(valorTotalPConv);
        }
        if (Number.isInteger(valorTotalPConv) == false) {
            numeroBinarioConstructor.push("1");
            valorTotalPConv = Math.floor(valorTotalPConv);
        }
        if (valorTotalPConv == 1) {
            numeroBinarioConstructor.push("1");
            valorTotalPConv = Math.floor(valorTotalPConv);
        }
        if (valorTotalPConv == 0) {
            numeroBinarioConstructor.push("0");
            valorTotalPConv = Math.floor(valorTotalPConv);
        }
        console.log("\nEtapa 3 => Construção do número binário: ", numeroBinarioConstructor);
    }
    numeroBinarioConstructor = numeroBinarioConstructor.reverse();
    console.log("\nEtapa 4 => Inversão do construtor para a formação do resultado final: ", numeroBinarioConstructor);
    for (var u = 0; u < numeroBinarioConstructor.length; u++) {
        numeroBinarioResultado = numeroBinarioResultado + numeroBinarioConstructor[u];
        console.log("\nEtapa 5 => Montando resultado final: ", numeroBinarioResultado);
    }
    var numeroBinarioRCSinal = numeroBinarioSinal + numeroBinarioResultado;
    console.log("\nEtapa 6 => Adicionando o sinal ao resultado: ", numeroBinarioRCSinal);
    console.log("\n\tEtapa 7 => Resultado Final: ", numeroBinarioRCSinal);
}
if (numeroPontoFlutuante == 1) {
    // console.error("Função ainda em desenvolvimento!");
    var numeroBinarioConstrutorInteiros = [];
    var numeroBinarioConstrutorDecimais = [];
    var pegaParteDecimal = /\.(\d+)$/gi;
    var pegaParteInteira = /^(\d+)/gi;
    while (valorTotalPConv >= 2.0) {
        if (valorTotalPConv < 0.0) {
            numeroBinarioConstrutorInteiros.push("1");
        }
        if (valorTotalPConv > 0.0) {
            numeroBinarioConstrutorInteiros.push("0");
        }
    }
    var $1 = valorTotalPConv.toString().match(pegaParteDecimal);
    var $2 = valorTotalPConv.toString().match(pegaParteInteira);
    console.log($1, $2);
}
