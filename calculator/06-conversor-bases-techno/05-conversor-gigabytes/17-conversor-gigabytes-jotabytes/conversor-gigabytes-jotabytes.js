var valoresConvGigabytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesJotabytes.length; t++) {
    if (valoresConvGigabytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado25 = total / Math.pow(1024, 9);
console.log("Resultado: ", resultado25);
