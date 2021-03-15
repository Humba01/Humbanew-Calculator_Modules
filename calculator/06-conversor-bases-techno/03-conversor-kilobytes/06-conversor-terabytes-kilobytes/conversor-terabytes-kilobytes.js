var valoresConvTerabytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesKilobytes.length; t++) {
    if (valoresConvTerabytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado10 = total * Math.pow(1024, 3);
console.log("Resultado: ", resultado10);
