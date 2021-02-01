var valoresConvBrontobytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBrontobytesBytes.length; t++) {
    if (valoresConvBrontobytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBrontobytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado20 = total * Math.pow(1024, 9);
console.log("Resultado: ", resultado20);
