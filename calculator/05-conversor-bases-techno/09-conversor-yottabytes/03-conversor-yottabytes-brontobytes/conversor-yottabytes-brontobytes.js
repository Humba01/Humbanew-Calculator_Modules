var valoresConvYottabytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvYottabytesBrontobytes.length; t++) {
    if (valoresConvYottabytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvYottabytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado3 = total / Math.pow(1024, 2);
console.log("Resultado: ", resultado3);
