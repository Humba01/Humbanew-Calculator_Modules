var valoresConvBrontobytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBrontobytesZettabytes.length; t++) {
    if (valoresConvBrontobytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBrontobytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado2 = total * 1024;
console.log("Resultado: ", resultado2);
