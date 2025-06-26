var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Digite o nome do empregado: \n", function (nome: string) {
  leitor.question("Digite a categoria do empregado (A-Z): \n", function (categoria: string) {
    leitor.question("Digite o salário atual do empregado: \n", function (salarioStr: string) {
      let salario = parseFloat(salarioStr);
      let aumento: number;
      let salarioReajustado: number;

      categoria = categoria.toUpperCase(); // Ensure category is uppercase for comparison

      switch (categoria) {
        case "A":
        case "C":
        case "F":
        case "H":
          aumento = 0.10; // 10%
          break;
        case "B":
        case "D":
        case "E":
        case "I":
        case "J":
        case "T":
          aumento = 0.15; // 15%
          break;
        case "K":
        case "R":
          aumento = 0.25; // 25%
          break;
        case "L":
        case "M":
        case "N":
        case "O":
        case "P":
        case "Q":
        case "S":
          aumento = 0.35; // 35%
          break;
        case "U":
        case "V":
        case "X":
        case "Y":
        case "W":
        case "Z":
          aumento = 0.50; // 50%
          break;
        default:
          aumento = 0; // No increase for invalid categories
          console.log("Categoria inválida. Nenhum aumento será aplicado.");
          break;
      }

      salarioReajustado = salario * (1 + aumento);

      console.log(`\nDados do Empregado:`);
      console.log(`Nome: ${nome}`);
      console.log(`Categoria: ${categoria}`);
      console.log(`Salário Original: R$ ${salario.toFixed(2)}`);
      console.log(`Salário Reajustado: R$ ${salarioReajustado.toFixed(2)}`);

      leitor.close();
    });
  });
});