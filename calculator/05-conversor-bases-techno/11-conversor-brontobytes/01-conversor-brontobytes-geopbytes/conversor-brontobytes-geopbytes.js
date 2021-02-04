var valoresConvBrontobytesGeopbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBrontobytesGeopbytes.length; t++) {
    if (valoresConvBrontobytesGeopbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBrontobytesGeopbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado = total / 1024;
console.log("Resultado: ", resultado);
