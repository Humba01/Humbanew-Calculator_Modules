var valoresConvTerabytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesMegabytes.length; t++) {
    if (valoresConvTerabytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado10 = total * Math.pow(1024, 2);
console.log("Resultado: ", resultado10);
