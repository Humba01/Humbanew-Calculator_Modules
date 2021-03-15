var valoresConvBrontobytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBrontobytesMegabytes.length; t++) {
    if (valoresConvBrontobytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBrontobytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado20 = total * Math.pow(1024, 7);
console.log("Resultado: ", resultado20);
