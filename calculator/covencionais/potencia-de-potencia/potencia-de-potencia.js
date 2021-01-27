var valorBase1 = "2";
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
        if (nvlPotenciacaoValores[q] == "") {
            totalNvlPotenciacao = totalNvlPotenciacao + 0;
        }
        else {
            totalNvlPotenciacao = totalNvlPotenciacao + parseFloat(nvlPotenciacaoValores[q]);
            console.log("Soma da Potenciação => Nvl:", nvlPotenciacao, "_> ", totalNvlPotenciacao);
        }
    }
    return totalNvlPotenciacao;
}
var comp1 = somaValoresDoNvlPotenciacao(potNvl1, 1);
var comp2 = somaValoresDoNvlPotenciacao(potNvl2, 2);
var comp3 = somaValoresDoNvlPotenciacao(potNvl3, 3);
var comp4 = somaValoresDoNvlPotenciacao(potNvl4, 4);
var comp5 = somaValoresDoNvlPotenciacao(potNvl5, 5);
var resultadoParcial4 = comp1 * comp2 * comp3 * comp4 * comp5;
console.log("Resultado: ", resultadoParcial4);
var traducaoParaNumero = parseFloat(valorBase1);
var resultado4 = Math.pow(traducaoParaNumero, resultadoParcial4);
console.log("Resultado da Operação: ", resultado4);
