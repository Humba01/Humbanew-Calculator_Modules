var valoresConvMegabytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesBytes.length; t++) {
    if (valoresConvMegabytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado6 = total * Math.pow(1024, 2);
console.log("Resultado: ", resultado6);
