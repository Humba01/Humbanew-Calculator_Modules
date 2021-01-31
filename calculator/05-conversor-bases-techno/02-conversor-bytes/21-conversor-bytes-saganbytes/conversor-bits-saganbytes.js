var valoresConvBitsSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsSaganbytes.length; t++) {
    if (valoresConvBitsSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado23 = (total / 8) / Math.pow(1024, 11);
console.log("Resultado: ", resultado23);
