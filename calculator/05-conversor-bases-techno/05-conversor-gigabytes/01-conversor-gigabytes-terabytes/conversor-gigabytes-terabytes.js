var valoresConvGigabytesTerabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesTerabytes.length; t++) {
    if (valoresConvGigabytesTerabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesTerabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado9 = total / 1024;
console.log("Resultado: ", resultado9);
