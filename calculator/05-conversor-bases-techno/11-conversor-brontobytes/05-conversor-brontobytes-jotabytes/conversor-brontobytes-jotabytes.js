var valoresConvBrontobytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBrontobytesJotabytes.length; t++) {
    if (valoresConvBrontobytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBrontobytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado5 = total / Math.pow(1024, 3);
console.log("Resultado: ", resultado5);
