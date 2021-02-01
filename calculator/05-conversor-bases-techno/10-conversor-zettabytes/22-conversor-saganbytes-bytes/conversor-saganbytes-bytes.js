var valoresConvSaganbytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesBytes.length; t++) {
    if (valoresConvSaganbytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado24 = total * Math.pow(1024, 11);
console.log("Resultado: ", resultado24);
