var valoresConvKilobytesGeopbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesGeopbytes.length; t++) {
    if (valoresConvKilobytesGeopbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesGeopbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado21 = total / Math.pow(1024, 9);
console.log("Resultado: ", resultado21);
