var valoresConvBitsPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsPetabytes.length; t++) {
    if (valoresConvBitsPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado11 = (total / 8) / Math.pow(1024, 5);
console.log("Resultado: ", resultado11);
