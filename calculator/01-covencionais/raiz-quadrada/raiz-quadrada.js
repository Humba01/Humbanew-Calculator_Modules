var valoresARadiciar = ["16", "4"];
var total2 = 0;
for (var r = 0; r < valoresARadiciar.length; r++) {
    if (valoresARadiciar[r] == "") {
        total2 = total2 + 0;
    }
    else {
        total2 = total2 + parseFloat(valoresARadiciar[r]);
        console.log(total2);
    }
}
var resultado5 = Math.sqrt(total2);
console.log(resultado5);
