var valoresConvGeopbytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesBytes.length; t++) {
    if (valoresConvGeopbytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado22 = total * Math.pow(1024, 10);
console.log("Resultado: ", resultado22);
