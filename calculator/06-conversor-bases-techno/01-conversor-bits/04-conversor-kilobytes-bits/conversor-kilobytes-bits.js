var valoresConvKilobytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesBits.length; t++) {
    if (valoresConvKilobytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado4 = (total * 8) * 1024;
console.log("Resultado: ", resultado4);
