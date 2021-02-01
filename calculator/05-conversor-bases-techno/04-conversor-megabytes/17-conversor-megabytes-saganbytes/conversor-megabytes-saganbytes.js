var valoresConvMegabytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesSaganbytes.length; t++) {
    if (valoresConvMegabytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado23 = total / Math.pow(1024, 9);
console.log("Resultado: ", resultado23);
