var valoresConvKilobytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesJotabytes.length; t++) {
    if (valoresConvKilobytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado25 = total / Math.pow(1024, 11);
console.log("Resultado: ", resultado25);
