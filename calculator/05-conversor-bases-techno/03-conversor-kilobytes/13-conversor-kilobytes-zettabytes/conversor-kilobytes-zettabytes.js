var valoresConvKilobytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesZettabytes.length; t++) {
    if (valoresConvKilobytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado17 = total / Math.pow(1024, 7);
console.log("Resultado: ", resultado17);
