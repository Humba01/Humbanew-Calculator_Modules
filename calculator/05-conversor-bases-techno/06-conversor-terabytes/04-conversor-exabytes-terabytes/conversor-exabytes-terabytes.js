var valoresConvExabytesTerabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvExabytesTerabytes.length; t++) {
    if (valoresConvExabytesTerabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvExabytesTerabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado4 = total * Math.pow(1024, 2);
console.log("Resultado: ", resultado4);
