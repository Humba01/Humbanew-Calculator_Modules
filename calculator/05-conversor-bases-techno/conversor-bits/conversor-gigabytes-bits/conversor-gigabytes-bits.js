var valoresConvGigabytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesBits.length; t++) {
    if (valoresConvGigabytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado8 = (total * 8) * Math.pow(1024, 3);
console.log("Resultado: ", resultado8);
