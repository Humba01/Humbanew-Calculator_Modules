var valoresConvGeopbytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesKilobytes.length; t++) {
    if (valoresConvGeopbytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado22 = total * Math.pow(1024, 9);
console.log("Resultado: ", resultado22);
