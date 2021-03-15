var valoresConvMegabytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesJotabytes.length; t++) {
    if (valoresConvMegabytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado25 = total / Math.pow(1024, 10);
console.log("Resultado: ", resultado25);
