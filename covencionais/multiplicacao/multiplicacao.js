var valoresAMultiplicar = ["2", "3.5", "32.2", "5"];
var total = 1;
for (var v = 0; v < valoresAMultiplicar.length; v++) {
    total = total * parseFloat(valoresAMultiplicar[v]);
    console.log("Valor Multiplicado:", total);
}
