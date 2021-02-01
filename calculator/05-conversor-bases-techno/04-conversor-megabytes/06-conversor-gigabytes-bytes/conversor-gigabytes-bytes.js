var valoresConvGigabytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesBytes.length; t++) {
    if (valoresConvGigabytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado8 = total * Math.pow(1024, 3);
console.log("Resultado: ", resultado8);
