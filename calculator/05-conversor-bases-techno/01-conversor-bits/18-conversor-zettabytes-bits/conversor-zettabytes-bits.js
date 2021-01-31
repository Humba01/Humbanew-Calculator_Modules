var valoresConvZettabytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvZettabytesBits.length; t++) {
    if (valoresConvZettabytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvZettabytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado18 = (total * 8) * Math.pow(1024, 8);
console.log("Resultado: ", resultado18);
