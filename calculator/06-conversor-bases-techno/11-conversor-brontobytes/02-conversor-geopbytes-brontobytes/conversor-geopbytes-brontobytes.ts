const valoresConvGeopbytesBrontobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesBrontobytes.length; t++) {
  if(valoresConvGeopbytesBrontobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesBrontobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado2 = total * 1024;
console.log("Resultado: ", resultado2);