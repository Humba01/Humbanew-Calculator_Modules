var valoresConvBytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesJotabytes.length; t++) {
    if (valoresConvBytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado25 = total / Math.pow(1024, 12);
console.log("Resultado: ", resultado25);
