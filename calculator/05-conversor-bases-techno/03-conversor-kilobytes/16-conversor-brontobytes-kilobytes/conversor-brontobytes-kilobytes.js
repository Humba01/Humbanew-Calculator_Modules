var valoresConvBrontobytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBrontobytesKilobytes.length; t++) {
    if (valoresConvBrontobytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBrontobytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado20 = total * Math.pow(1024, 8);
console.log("Resultado: ", resultado20);
