var valoresConvKilobytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesSaganbytes.length; t++) {
    if (valoresConvKilobytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado23 = total / Math.pow(1024, 10);
console.log("Resultado: ", resultado23);
