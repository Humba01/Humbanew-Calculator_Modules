var valores = ["90000000000000000"];
var valorTotalPConv = 0;
var numeroPontoFlutuante = false;
for (var y = 0; y < valores.length; y++) {
    if (valores[y] == "") {
        valorTotalPConv = valorTotalPConv + 0;
    }
    else {
        valorTotalPConv = valorTotalPConv + parseFloat(valores[y]);
        console.log("\nEtapa 1 => Valor Total: ", valorTotalPConv);
    }
}
var numeroBinarioConstructor = [];
var numeroBinarioResultado = "";
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
console.log("\n\tEtapa 6 => Resultado Final: ", numeroBinarioResultado);
