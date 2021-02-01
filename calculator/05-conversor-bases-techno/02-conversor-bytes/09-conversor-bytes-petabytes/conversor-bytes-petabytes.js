var valoresConvBytesPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesPetabytes.length; t++) {
    if (valoresConvBytesPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado11 = total / Math.pow(1024, 5);
console.log("Resultado: ", resultado11);
