var valoresConvSaganbytesPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesPetabytes.length; t++) {
    if (valoresConvSaganbytesPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado12 = total * Math.pow(1024, 6);
console.log("Resultado: ", resultado12);
