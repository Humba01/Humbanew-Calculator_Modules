var valoresConvBitsGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsGigabytes.length; t++) {
    if (valoresConvBitsGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado7 = (total / 8) / Math.pow(1024, 3);
console.log("Resultado: ", resultado7);
