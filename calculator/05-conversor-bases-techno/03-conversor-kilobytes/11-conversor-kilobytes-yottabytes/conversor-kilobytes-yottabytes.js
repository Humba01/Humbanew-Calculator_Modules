var valoresConvKilobytesYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesYottabytes.length; t++) {
    if (valoresConvKilobytesYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado15 = total / Math.pow(1024, 6);
console.log("Resultado: ", resultado15);
