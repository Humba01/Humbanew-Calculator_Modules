var valoresConvMegabytesExabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesExabytes.length; t++) {
    if (valoresConvMegabytesExabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesExabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado13 = total / Math.pow(1024, 4);
console.log("Resultado: ", resultado13);
