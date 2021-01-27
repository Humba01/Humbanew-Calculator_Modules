var valores = ["2", "3.5", "32.2", "5"];
var valoresSubtracao = ["1000"];
var tagsDaRegex = "gi";
var total = 0;
var totalSubtracao = 0;
for (var r = 0; r < valoresSubtracao.length; r++) {
    totalSubtracao = totalSubtracao + parseFloat(valoresSubtracao[r]);
    console.log("Valor a Subtrair:", totalSubtracao);
}
for (var v = 0; v < valores.length; v++) {
    total = total + parseFloat(valores[v]);
    console.log("Valor que vai Subtrair:", total);
}
var contaFinal = totalSubtracao - total;
console.log("Resultado:", contaFinal);
