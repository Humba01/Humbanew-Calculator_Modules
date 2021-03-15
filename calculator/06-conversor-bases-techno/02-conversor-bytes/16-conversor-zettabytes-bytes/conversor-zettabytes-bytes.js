var valoresConvZettabytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvZettabytesBytes.length; t++) {
    if (valoresConvZettabytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvZettabytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado18 = total * Math.pow(1024, 8);
console.log("Resultado: ", resultado18);
