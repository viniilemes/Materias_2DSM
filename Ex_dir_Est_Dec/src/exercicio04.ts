var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Digite sua idade em anos: \n", function (answer: string) {
  var idade = parseInt(answer);

  if (idade <= 10) {
    console.log("Categoria: Criança");
  } else if (idade >= 11 && idade <= 13) {
    console.log("Categoria: Pré-Adolescente");
  } else if (idade >= 14 && idade <= 17) {
    console.log("Categoria: Adolescente");
  } else if (idade >= 18 && idade <= 59) {
    console.log("Categoria: Adulto");
  } else {
    console.log("Categoria: Idoso");
  }

  leitor.close();
});