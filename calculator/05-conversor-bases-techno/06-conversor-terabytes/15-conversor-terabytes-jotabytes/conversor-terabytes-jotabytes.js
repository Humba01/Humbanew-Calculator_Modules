var valoresConvTerabytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesJotabytes.length; t++) {
    if (valoresConvTerabytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado15 = total / Math.pow(1024, 8);
console.log("Resultado: ", resultado15);
