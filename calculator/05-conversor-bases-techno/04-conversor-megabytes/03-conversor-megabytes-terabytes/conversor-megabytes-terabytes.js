var valoresConvMegabytesTerabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesTerabytes.length; t++) {
    if (valoresConvMegabytesTerabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesTerabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado9 = total / Math.pow(1024, 2);
console.log("Resultado: ", resultado9);
