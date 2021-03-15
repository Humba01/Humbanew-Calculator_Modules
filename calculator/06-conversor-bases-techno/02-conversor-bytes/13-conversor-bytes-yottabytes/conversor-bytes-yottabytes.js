var valoresConvBytesYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesYottabytes.length; t++) {
    if (valoresConvBytesYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado15 = total / Math.pow(1024, 7);
console.log("Resultado: ", resultado15);
