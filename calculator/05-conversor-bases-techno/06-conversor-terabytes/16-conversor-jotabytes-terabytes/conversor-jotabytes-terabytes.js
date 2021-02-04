var valoresConvJotabytesTerabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesTerabytes.length; t++) {
    if (valoresConvJotabytesTerabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesTerabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado16 = total * Math.pow(1024, 8);
console.log("Resultado: ", resultado16);
