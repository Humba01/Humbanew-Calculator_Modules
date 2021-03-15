var valoresConvGigabytesGeopbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesGeopbytes.length; t++) {
    if (valoresConvGigabytesGeopbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesGeopbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado21 = total / Math.pow(1024, 7);
console.log("Resultado: ", resultado21);
