var valoresConvGigabytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesSaganbytes.length; t++) {
    if (valoresConvGigabytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado23 = total / Math.pow(1024, 8);
console.log("Resultado: ", resultado23);
