var valoresParaRealizarSeno = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarSeno.length; g++) {
    if (valoresParaRealizarSeno[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarSeno[g]);
        console.log("Valor para realizar o seno: ", total);
    }
}
var resultado6 = Math.sin(total);
console.log("Resultado do Seno: ", resultado6);
