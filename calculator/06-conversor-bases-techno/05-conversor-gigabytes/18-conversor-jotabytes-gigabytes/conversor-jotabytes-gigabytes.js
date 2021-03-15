var valoresConvJotabytesGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesGigabytes.length; t++) {
    if (valoresConvJotabytesGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado26 = total * Math.pow(1024, 9);
console.log("Resultado: ", resultado26);
