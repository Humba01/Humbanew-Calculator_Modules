var valoresConvSaganbytesGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesGigabytes.length; t++) {
    if (valoresConvSaganbytesGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado24 = total * Math.pow(1024, 8);
console.log("Resultado: ", resultado24);
