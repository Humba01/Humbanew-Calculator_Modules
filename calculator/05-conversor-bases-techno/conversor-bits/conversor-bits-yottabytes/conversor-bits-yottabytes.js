var valoresConvBitsYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsYottabytes.length; t++) {
    if (valoresConvBitsYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado15 = (total / 8) / Math.pow(1024, 7);
console.log("Resultado: ", resultado15);
