var valoresConvBytesExabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesExabytes.length; t++) {
    if (valoresConvBytesExabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesExabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado13 = total / Math.pow(1024, 6);
console.log("Resultado: ", resultado13);
