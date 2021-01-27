var valoresAPotencializar = ["2", "3.5", "32.2", "5"];
var valorBase = "2";
var total = 0;
var resultado3 = 0;
for (var v = 0; v < valoresAPotencializar.length; v++) {
    total = total + parseFloat(valoresAPotencializar[v]);
    console.log("Valor da Potencia:", total);
}
resultado3 = Math.pow(parseFloat(valorBase), total);
console.log("Resultado:", resultado3);
