const readline = require('readline');
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroCorreto: number = Math.floor(Math.random() * 10) + 1;

function perguntar() {
  leitor.question("Adivinhe o número (entre 1 e 10): \n", (palpiteStr: string) => {
    const tentativa = parseInt(palpiteStr);
    if (isNaN(tentativa)) {
      console.log("Entrada inválida. Por favor, digite um número.");
      perguntar();
    } else if (tentativa < numeroCorreto) {
      console.log("Muito baixo!");
      perguntar();
    } else if (tentativa > numeroCorreto) {
      console.log("Muito alto!");
      perguntar();
    } else {
      console.log(`Parabéns! Você adivinhou o número ${numeroCorreto}!`);
      leitor.close();
    }
  });
}

perguntar();