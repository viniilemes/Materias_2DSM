var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Digite o salário mensal atual do funcionário: \n", function (salarioAtualStr: string) {
  let salarioAtual = parseFloat(salarioAtualStr);
  let percentualReajuste: number;
  let salarioReajustado: number;

  if (salarioAtual <= 650.00) {
    percentualReajuste = 0.10; // 10%
  } else {
    percentualReajuste = 0.05; // 5%
  }

  salarioReajustado = salarioAtual * (1 + percentualReajuste);

  console.log(`Salário Original: R$ ${salarioAtual.toFixed(2)}`);
  console.log(`Percentual de Reajuste: ${(percentualReajuste * 100).toFixed(0)}%`);
  console.log(`Salário Reajustado: R$ ${salarioReajustado.toFixed(2)}`);

  leitor.close();
});