var valoresConvMegabytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesZettabytes.length; t++) {
    if (valoresConvMegabytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado17 = total / Math.pow(1024, 6);
console.log("Resultado: ", resultado17);
