var valoresConvMegabytesYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesYottabytes.length; t++) {
    if (valoresConvMegabytesYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado15 = total / Math.pow(1024, 5);
console.log("Resultado: ", resultado15);
