var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function perguntar() {
  leitor.question("Digite algo (ou 'sair' para encerrar): \n", function (resposta: string) {
    if (resposta.toLowerCase() === "sair") {
      console.log("Encerrando o programa.");
      leitor.close();
    } else {
      console.log("Você digitou: " + resposta);
      perguntar();
    }
  });
}
perguntar();