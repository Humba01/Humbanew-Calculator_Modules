var valoresASubtrair = ["2", "3.5", "32.2", "5"];
var valoresSubtracao = ["1000"];
var total = 0;
var totalSubtracao = 0;
for (var r = 0; r < valoresSubtracao.length; r++) {
    totalSubtracao = totalSubtracao + parseFloat(valoresSubtracao[r]);
    console.log("Valor a Subtrair:", totalSubtracao);
}
for (var v = 0; v < valoresASubtrair.length; v++) {
    total = total + parseFloat(valoresASubtrair[v]);
    console.log("Valor que vai Subtrair:", total);
}
var resultado = totalSubtracao - total;
console.log("Resultado:", resultado);
