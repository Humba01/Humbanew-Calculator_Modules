var valoresConvYottabytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvYottabytesZettabytes.length; t++) {
    if (valoresConvYottabytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvYottabytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado = total / 1024;
console.log("Resultado: ", resultado);
