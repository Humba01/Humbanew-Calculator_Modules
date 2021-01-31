var valoresConvMegabytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesBits.length; t++) {
    if (valoresConvMegabytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado6 = (total * 8) * Math.pow(1024, 2);
console.log("Resultado: ", resultado6);
