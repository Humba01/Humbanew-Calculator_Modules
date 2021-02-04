var valoresConvSaganbytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesZettabytes.length; t++) {
    if (valoresConvSaganbytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado6 = total * Math.pow(1024, 3);
console.log("Resultado: ", resultado6);
