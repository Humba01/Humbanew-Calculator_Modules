var valoresConvGigabytesYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesYottabytes.length; t++) {
    if (valoresConvGigabytesYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado15 = total / Math.pow(1024, 4);
console.log("Resultado: ", resultado15);
