var valorBase1 = "2";
var valorQuantidadeDePotenciacoes = 0; //2
var valorLimiteDePotenciacoes = 10;
var potNvl1 = ["2.5"];
var potNvl2 = ["5.4"];
var potNvl3 = ["2.1"];
var potNvl4 = ["1"];
var potNvl5 = ["1"];
function somaValoresDoNvlPotenciacao(nvlPotenciacaoValores, nvlPotenciacao) {
    if (nvlPotenciacaoValores === void 0) { nvlPotenciacaoValores = [""]; }
    if (nvlPotenciacao === void 0) { nvlPotenciacao = 0; }
    var totalNvlPotenciacao = 0;
    for (var q = 0; q < nvlPotenciacaoValores.length; q++) {
        totalNvlPotenciacao = totalNvlPotenciacao + parseFloat(nvlPotenciacaoValores[q]);
        console.log("Soma da Potenciação => Nvl:", nvlPotenciacao, "_> ", totalNvlPotenciacao);
    }
    return totalNvlPotenciacao;
}
var resultadoParcial4 = somaValoresDoNvlPotenciacao(potNvl1, 1) * somaValoresDoNvlPotenciacao(potNvl2, 2) * somaValoresDoNvlPotenciacao(potNvl3, 3) * somaValoresDoNvlPotenciacao(potNvl4, 4) * somaValoresDoNvlPotenciacao(potNvl5, 5);
console.log("Resultado: ", resultadoParcial4);
var resultado4 = Math.pow(parseFloat(valorBase1), resultadoParcial4);
console.log("Resultado da Operação: ", resultado4);
