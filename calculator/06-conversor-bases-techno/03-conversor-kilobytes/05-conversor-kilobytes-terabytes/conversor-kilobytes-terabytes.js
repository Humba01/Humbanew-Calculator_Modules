var valoresConvKilobytesTerabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesTerabytes.length; t++) {
    if (valoresConvKilobytesTerabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesTerabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado9 = total / Math.pow(1024, 3);
console.log("Resultado: ", resultado9);
