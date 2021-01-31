var valoresConvBitsGeopbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsGeopbytes.length; t++) {
    if (valoresConvBitsGeopbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsGeopbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado21 = (total / 8) / Math.pow(1024, 10);
console.log("Resultado: ", resultado21);
