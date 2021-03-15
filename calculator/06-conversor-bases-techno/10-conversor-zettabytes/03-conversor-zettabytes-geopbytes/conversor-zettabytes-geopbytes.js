var valoresConvZettabytesGeopbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvZettabytesGeopbytes.length; t++) {
    if (valoresConvZettabytesGeopbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvZettabytesGeopbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado3 = total / Math.pow(1024, 2);
console.log("Resultado: ", resultado3);
