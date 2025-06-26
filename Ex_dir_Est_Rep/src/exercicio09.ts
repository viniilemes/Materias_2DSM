var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function ehPrimo(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function obterFatoresPrimos(num: number): number[] {
  let fatores: number[] = [];
  let divisor = 2;
  let tempNum = num;
  while (tempNum > 1) {
    if (tempNum % divisor === 0) {
      fatores.push(divisor);
      tempNum /= divisor;
    } else {
      divisor++;
    }
  }
  return [...new Set(fatores)];
}
leitor.question("Digite um número inteiro: \n", function (numeroStr: string) {
  let numero = parseInt(numeroStr);
  if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, digite um número inteiro positivo.");
    leitor.close();
    return;
  }
  if (ehPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
  } else {
    console.log(`${numero} não é um número primo.`);
    let fatoresPrimos = obterFatoresPrimos(numero);
    console.log(`Seus únicos fatores primos são: ${fatoresPrimos.join(', ')}`);
  }
  leitor.close();
});