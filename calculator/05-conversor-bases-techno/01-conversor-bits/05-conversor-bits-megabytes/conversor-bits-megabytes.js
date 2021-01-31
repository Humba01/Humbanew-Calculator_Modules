var valoresConvBitsMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsMegabytes.length; t++) {
    if (valoresConvBitsMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado5 = (total / 8) / Math.pow(1024, 2);
console.log("Resultado: ", resultado5);
