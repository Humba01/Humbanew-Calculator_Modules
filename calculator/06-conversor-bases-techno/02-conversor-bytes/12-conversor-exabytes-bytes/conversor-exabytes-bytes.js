var valoresConvExabytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvExabytesBytes.length; t++) {
    if (valoresConvExabytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvExabytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado14 = total * Math.pow(1024, 6);
console.log("Resultado: ", resultado14);
