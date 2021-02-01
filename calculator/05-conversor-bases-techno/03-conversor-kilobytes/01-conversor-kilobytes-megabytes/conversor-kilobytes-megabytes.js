var valoresConvKilobytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesMegabytes.length; t++) {
    if (valoresConvKilobytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado5 = total / 1024;
console.log("Resultado: ", resultado5);
