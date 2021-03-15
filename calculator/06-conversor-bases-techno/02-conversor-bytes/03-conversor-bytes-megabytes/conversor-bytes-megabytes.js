var valoresConvBytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesMegabytes.length; t++) {
    if (valoresConvBytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado5 = total / Math.pow(1024, 2);
console.log("Resultado: ", resultado5);
