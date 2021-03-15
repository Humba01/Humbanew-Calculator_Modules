var valoresConvZettabytesYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvZettabytesYottabytes.length; t++) {
    if (valoresConvZettabytesYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvZettabytesYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado2 = total * 1024;
console.log("Resultado: ", resultado2);
