var valoresConvKilobytesPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesPetabytes.length; t++) {
    if (valoresConvKilobytesPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado11 = total / Math.pow(1024, 4);
console.log("Resultado: ", resultado11);
