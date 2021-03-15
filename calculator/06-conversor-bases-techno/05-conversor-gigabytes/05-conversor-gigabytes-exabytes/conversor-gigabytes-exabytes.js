var valoresConvGigabytesExabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesExabytes.length; t++) {
    if (valoresConvGigabytesExabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesExabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado13 = total / Math.pow(1024, 3);
console.log("Resultado: ", resultado13);
