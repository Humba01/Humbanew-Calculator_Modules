var valoresConvJotabytesExabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesExabytes.length; t++) {
    if (valoresConvJotabytesExabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesExabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado12 = total * Math.pow(1024, 6);
console.log("Resultado: ", resultado12);
