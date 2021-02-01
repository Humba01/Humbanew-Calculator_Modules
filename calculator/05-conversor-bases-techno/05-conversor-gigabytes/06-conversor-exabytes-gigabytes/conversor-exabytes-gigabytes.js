var valoresConvExabytesGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvExabytesGigabytes.length; t++) {
    if (valoresConvExabytesGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvExabytesGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado14 = total * Math.pow(1024, 3);
console.log("Resultado: ", resultado14);
