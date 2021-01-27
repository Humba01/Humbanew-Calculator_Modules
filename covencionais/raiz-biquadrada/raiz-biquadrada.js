var valoresARadiciar2 = ["16", "4"];
var total2 = 0;
for (var r = 0; r < valoresARadiciar2.length; r++) {
    total2 = total2 + parseFloat(valoresARadiciar2[r]);
    console.log(total2);
}
var resultado5 = Math.sqrt(Math.sqrt(total2));
console.log(resultado5);
