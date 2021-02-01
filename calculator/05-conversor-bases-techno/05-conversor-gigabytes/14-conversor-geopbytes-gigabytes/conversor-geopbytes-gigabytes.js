var valoresConvGeopbytesGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesGigabytes.length; t++) {
    if (valoresConvGeopbytesGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado22 = total * Math.pow(1024, 7);
console.log("Resultado: ", resultado22);
