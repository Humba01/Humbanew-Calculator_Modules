var valoresConvBitsTerabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsTerabytes.length; t++) {
    if (valoresConvBitsTerabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsTerabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado9 = (total / 8) / Math.pow(1024, 4);
console.log("Resultado: ", resultado9);
