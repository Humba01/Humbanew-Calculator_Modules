var valoresConvBitsBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBitsBytes.length; t++) {
    if (valoresConvBitsBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBitsBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado = total / 8;
console.log("Resultado: ", resultado);
