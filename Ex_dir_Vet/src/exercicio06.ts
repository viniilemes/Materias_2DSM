var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let nomes: string[] = [];
let notas: number[][] = [];
let medias: number[] = [];
let contadorAlunos: number = 0;

function coletarDadosAluno() {
  if (contadorAlunos < 5) {
    leitor.question(`Digite o nome do aluno ${contadorAlunos + 1}: \n`, function (nome: string) {
      nomes.push(nome);
      leitor.question(`Digite a primeira nota de ${nome}: \n`, function (nota1Str: string) {
        let nota1 = parseFloat(nota1Str);
        leitor.question(`Digite a segunda nota de ${nome}: \n`, function (nota2Str: string) {
          let nota2 = parseFloat(nota2Str);
          notas.push([nota1, nota2]);
          let media = (nota1 + nota2) / 2;
          medias.push(media);
          contadorAlunos++;
          coletarDadosAluno();
        });
      });
    });
  } else {
    for (let i = 0; i < 5; i++) {
      console.log(`\nAluno: ${nomes[i]}`);
      console.log(`Notas: ${notas[i][0].toFixed(2)}, ${notas[i][1].toFixed(2)}`);
      console.log(`Média: ${medias[i].toFixed(2)}`);
    }
    leitor.close();
  }
}
coletarDadosAluno();