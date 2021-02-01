var valoresConvMegabytesPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesPetabytes.length; t++) {
    if (valoresConvMegabytesPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado11 = total / Math.pow(1024, 3);
console.log("Resultado: ", resultado11);
