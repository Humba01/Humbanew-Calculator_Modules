var valoresConvZettabytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvZettabytesKilobytes.length; t++) {
    if (valoresConvZettabytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvZettabytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado18 = total * Math.pow(1024, 7);
console.log("Resultado: ", resultado18);
