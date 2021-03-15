var valoresConvYottabytesPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvYottabytesPetabytes.length; t++) {
    if (valoresConvYottabytesPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvYottabytesPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado4 = total * Math.pow(1024, 2);
console.log("Resultado: ", resultado4);
