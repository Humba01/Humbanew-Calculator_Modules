const valoresConvJotabytesBrontobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesBrontobytes.length; t++) {
  if(valoresConvJotabytesBrontobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesBrontobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado6 = total * 1024 ** 3;
console.log("Resultado: ", resultado6);