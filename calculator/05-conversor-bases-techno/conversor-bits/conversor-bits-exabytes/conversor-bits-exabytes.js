var valoresConvBitsExabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsExabytes.length; t++) {
    if (valoresConvBitsExabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsExabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado13 = (total / 8) / Math.pow(1024, 6);
console.log("Resultado: ", resultado13);
