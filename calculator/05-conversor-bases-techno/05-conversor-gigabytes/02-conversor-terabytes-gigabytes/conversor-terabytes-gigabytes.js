var valoresConvTerabytesGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesGigabytes.length; t++) {
    if (valoresConvTerabytesGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado10 = total * 1024;
console.log("Resultado: ", resultado10);
