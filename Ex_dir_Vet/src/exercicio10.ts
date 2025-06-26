var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
leitor.question("Digite a quantidade de elementos (tamanho N da matriz N x N): \n", function (tamanhoStr: string) {
  let N = parseInt(tamanhoStr);
  if (isNaN(N) || N <= 0) {
    console.log("Por favor, digite um número inteiro positivo para o tamanho da matriz.");
    leitor.close();
    return;
  }
  let matrizOriginal: number[][] = [];
  let matrizModificada: number[][] = [];
  for (let i = 0; i < N; i++) {
    matrizOriginal[i] = [];
    matrizModificada[i] = [];
    for (let j = 0; j < N; j++) {
      matrizOriginal[i][j] = Math.floor(Math.random() * 100 + 1);
    }
  }
  console.log("\nMatriz Original:");
  for (let i = 0; i < N; i++) {
    console.log(matrizOriginal[i].join('\t'));
  }
  let primeiraLinha = matrizOriginal[0];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      matrizModificada[i][j] = matrizOriginal[i][j] + primeiraLinha[j];
    }
  }
  console.log("\nMatriz Modificada (primeira linha somada a todas as linhas):");
  for (let i = 0; i < N; i++) {
    console.log(matrizModificada[i].join('\t'));
  }
  leitor.close();
});