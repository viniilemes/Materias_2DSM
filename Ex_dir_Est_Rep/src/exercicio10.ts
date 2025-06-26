var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let numeros: number[] = [];
let contador: number = 0;
function lerNumeros() {
  if (contador < 10) {
    leitor.question(`Digite o número ${contador + 1} (entre 1 e 100): \n`, function (numStr: string) {
      let num = parseInt(numStr);
      if (isNaN(num) || num < 1 || num > 100) {
        console.log("Entrada inválida. Digite um número entre 1 e 100.");
        lerNumeros();
      } else {
        numeros.push(num);
        contador++;
        lerNumeros();
      }
    });
  } else {
    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    let soma = numeros.reduce((acc, curr) => acc + curr, 0);
    let numerosOrdenados = [...numeros].sort((a, b) => a - b);
    console.log("\nResultados:");
    console.log(`Menor número informado: ${menor}`);
    console.log(`Maior número informado: ${maior}`);
    console.log(`Somatória dos números: ${soma}`);
    console.log(`Números em ordem crescente: ${numerosOrdenados.join(', ')}`);
    leitor.close();
  }
}
lerNumeros();