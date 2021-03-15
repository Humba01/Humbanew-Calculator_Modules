var valoresConvGigabytesKilobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesKilobytes.length; t++) {
    if (valoresConvGigabytesKilobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesKilobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado8 = total * Math.pow(1024, 2);
console.log("Resultado: ", resultado8);
