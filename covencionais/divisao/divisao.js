var valoresADividir = ["2", "3.5", "32.2", "5"];
var valoresDivisao = ["1000"];
var total = 0;
var totalDivisao = 0;
for (var r = 0; r < valoresDivisao.length; r++) {
    totalDivisao = totalDivisao + parseFloat(valoresDivisao[r]);
    console.log("Valor a Dividir:", totalDivisao);
}
for (var v = 0; v < valoresADividir.length; v++) {
    total = total + parseFloat(valoresADividir[v]);
    console.log("Valor que vai Dividir:", total);
}
var resultado2 = totalDivisao / total;
console.log("Resultado:", resultado2);
