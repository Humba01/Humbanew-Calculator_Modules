var valoresConvYottaytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvYottaytesSaganbytes.length; t++) {
    if (valoresConvYottaytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvYottaytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado7 = total / Math.pow(1024, 4);
console.log("Resultado: ", resultado7);
