var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
leitor.question("Digite a quantidade de números que deseja somar: \n", function (nStr: string) {
  let n = parseInt(nStr);
  if (isNaN(n) || n <= 0) {
    console.log("Entrada inválida. Por favor, digite um número inteiro positivo.");
    leitor.close();
    return;
  }
  let soma: number = 0;
  function lerNumero(i: number) {
    if (i <= n) {
      leitor.question(`Digite o número ${i}: \n`, function (numeroStr: string) {
        let numero = parseFloat(numeroStr);
        if (isNaN(numero)) {
          console.log("Entrada inválida. Por favor, digite um número.");
          lerNumero(i);
        } else {
          soma += numero;
          lerNumero(i + 1);
        }
      });
    } else {
      console.log(`A somatória dos ${n} números é: ${soma}`);
      leitor.close();
    }
  }
  lerNumero(1);
});