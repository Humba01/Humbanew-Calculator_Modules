var valoresConvZettabytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvZettabytesSaganbytes.length; t++) {
    if (valoresConvZettabytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvZettabytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado5 = total / Math.pow(1024, 3);
console.log("Resultado: ", resultado5);
