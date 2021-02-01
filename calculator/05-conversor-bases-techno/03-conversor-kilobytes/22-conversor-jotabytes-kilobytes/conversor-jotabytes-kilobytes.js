var valoresConvJotabytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesKilobytes.length; t++) {
    if (valoresConvJotabytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado26 = total * Math.pow(1024, 11);
console.log("Resultado: ", resultado26);
