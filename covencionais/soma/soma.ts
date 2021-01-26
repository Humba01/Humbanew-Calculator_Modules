const valores: string[] = ["2", "3.0"];

const expressaoIntString: RegExp = /\"\b+\"/ig;
const expressaoFloatString: RegExp = /\"\b+\.\b+\"/ig;

console.log(new RegExp(expressaoIntString).test(valores[0]));

const totalDaConta: number = 0;
