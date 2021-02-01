var valoresConvExabytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvExabytesKilobytes.length; t++) {
    if (valoresConvExabytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvExabytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado14 = total * Math.pow(1024, 5);
console.log("Resultado: ", resultado14);
