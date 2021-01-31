var valoresConvBitsJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsJotabytes.length; t++) {
    if (valoresConvBitsJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado25 = (total / 8) / Math.pow(1024, 12);
console.log("Resultado: ", resultado25);
