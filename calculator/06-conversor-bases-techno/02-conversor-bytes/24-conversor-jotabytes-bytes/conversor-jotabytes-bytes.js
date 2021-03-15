var valoresConvJotabytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesBytes.length; t++) {
    if (valoresConvJotabytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado26 = total * Math.pow(1024, 12);
console.log("Resultado: ", resultado26);
