var valoresConvBitsZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsZettabytes.length; t++) {
    if (valoresConvBitsZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado17 = (total / 8) / Math.pow(1024, 8);
console.log("Resultado: ", resultado17);
