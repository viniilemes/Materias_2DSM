var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Digite o número total de eleitores do município: \n", function (totalEleitoresStr: string) {
  let totalEleitores = parseInt(totalEleitoresStr);

  leitor.question("Digite o número de votos brancos: \n", function (votosBrancosStr: string) {
    let votosBrancos = parseInt(votosBrancosStr);

    leitor.question("Digite o número de votos nulos: \n", function (votosNulosStr: string) {
      let votosNulos = parseInt(votosNulosStr);

      leitor.question("Digite o número de votos válidos: \n", function (votosValidosStr: string) {
        let votosValidos = parseInt(votosValidosStr);

        leitor.question("Digite o número de votos que o candidato obteve: \n", function (votosCandidatoStr: string) {
          let votosCandidato = parseInt(votosCandidatoStr);

          let totalVotosConsiderados = votosValidos + votosBrancos;
          let percentualCandidatoSobreValidosBrancos = (votosCandidato / totalVotosConsiderados) * 100;
          let percentualCandidatoSobreEleitores = (votosCandidato / totalEleitores) * 100;

          if (percentualCandidatoSobreValidosBrancos > 10) {
            console.log("O candidato foi eleito!");
          } else {
            console.log("O candidato não foi eleito.");
          }

          console.log(`Percentual de votação do candidato perante o total de eleitores: ${percentualCandidatoSobreEleitores.toFixed(2)}%`);

          leitor.close();
        });
      });
    });
  });
});