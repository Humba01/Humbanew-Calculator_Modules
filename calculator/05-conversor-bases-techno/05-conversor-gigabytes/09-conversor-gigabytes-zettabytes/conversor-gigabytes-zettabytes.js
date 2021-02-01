var valoresConvGigabytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesZettabytes.length; t++) {
    if (valoresConvGigabytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado17 = total / Math.pow(1024, 5);
console.log("Resultado: ", resultado17);
