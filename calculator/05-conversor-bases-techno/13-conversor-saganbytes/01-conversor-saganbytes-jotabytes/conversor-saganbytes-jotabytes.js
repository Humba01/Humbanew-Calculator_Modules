var valoresConvSaganbytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesJotabytes.length; t++) {
    if (valoresConvSaganbytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado = total / 1024;
console.log("Resultado: ", resultado);
