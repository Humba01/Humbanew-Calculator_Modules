var valoresConvTerabytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesBytes.length; t++) {
    if (valoresConvTerabytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado10 = total * Math.pow(1024, 4);
console.log("Resultado: ", resultado10);
