var valoresConvGeopbytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesJotabytes.length; t++) {
    if (valoresConvGeopbytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado3 = total / Math.pow(1024, 2);
console.log("Resultado: ", resultado3);
