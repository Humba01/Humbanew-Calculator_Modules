var valoresConvSaganbytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesKilobytes.length; t++) {
    if (valoresConvSaganbytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado24 = total * Math.pow(1024, 10);
console.log("Resultado: ", resultado24);
