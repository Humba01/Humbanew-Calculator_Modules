var valoresConvBytesTerabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesTerabytes.length; t++) {
    if (valoresConvBytesTerabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesTerabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado9 = total / Math.pow(1024, 4);
console.log("Resultado: ", resultado9);
