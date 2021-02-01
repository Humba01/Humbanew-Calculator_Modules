var valoresConvBytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesZettabytes.length; t++) {
    if (valoresConvBytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado17 = total / Math.pow(1024, 8);
console.log("Resultado: ", resultado17);
