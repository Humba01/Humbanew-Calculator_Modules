var valoresConvYottabytesGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvYottabytesGigabytes.length; t++) {
    if (valoresConvYottabytesGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvYottabytesGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado16 = total * Math.pow(1024, 4);
console.log("Resultado: ", resultado16);
