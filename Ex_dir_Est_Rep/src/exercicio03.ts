var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
leitor.question("Digite um número para ver a tabuada: \n", function (numeroStr: string) {
  let numero = parseInt(numeroStr);
  if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número.");
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  leitor.close();
});