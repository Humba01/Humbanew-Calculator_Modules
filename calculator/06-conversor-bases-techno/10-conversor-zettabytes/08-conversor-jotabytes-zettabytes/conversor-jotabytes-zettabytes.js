var valoresConvJotabytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesZettabytes.length; t++) {
    if (valoresConvJotabytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado8 = total * Math.pow(1024, 4);
console.log("Resultado: ", resultado8);
