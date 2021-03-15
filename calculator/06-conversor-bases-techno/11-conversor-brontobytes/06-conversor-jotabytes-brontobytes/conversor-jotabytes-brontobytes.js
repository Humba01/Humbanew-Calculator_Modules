var valoresConvJotabytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesBrontobytes.length; t++) {
    if (valoresConvJotabytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado6 = total * Math.pow(1024, 3);
console.log("Resultado: ", resultado6);
