var valoresConvYottabytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvYottabytesJotabytes.length; t++) {
    if (valoresConvYottabytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvYottabytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado9 = total / Math.pow(1024, 5);
console.log("Resultado: ", resultado9);
