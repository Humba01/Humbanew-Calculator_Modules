var valoresConvSaganbytesYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesYottabytes.length; t++) {
    if (valoresConvSaganbytesYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado8 = total * Math.pow(1024, 4);
console.log("Resultado: ", resultado8);
