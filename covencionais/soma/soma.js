var valores = ["2", "3.5", "32.2", "5"];
var tagsDaRegex = "gi";
var total = 0;
for (var v = 0; v < valores.length; v++) {
    total = total + parseFloat(valores[v]);
    console.log("Valor Somado:", total);
}
