var valoresConvExabytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvExabytesBits.length; t++) {
    if (valoresConvExabytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvExabytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado14 = (total * 8) * Math.pow(1024, 6);
console.log("Resultado: ", resultado14);
