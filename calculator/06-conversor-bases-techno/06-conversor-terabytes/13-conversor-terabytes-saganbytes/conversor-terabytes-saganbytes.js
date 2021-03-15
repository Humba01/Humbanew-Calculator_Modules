var valoresConvTerabytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesSaganbytes.length; t++) {
    if (valoresConvTerabytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado13 = total / Math.pow(1024, 7);
console.log("Resultado: ", resultado13);
