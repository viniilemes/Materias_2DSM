var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
leitor.question("Digite uma palavra: \n", function (palavra: string) {
  let vogais = 0;
  let consoantes = 0;
  let palavraMinusc = palavra.toLowerCase();
  for (let i = 0; i < palavraMinusc.length; i++) {
    let char = palavraMinusc[i];
    if (char >= 'a' && char <= 'z') {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vogais++;
      } else {
        consoantes++;
      }
    }
  }
  console.log(`A palavra "${palavra}" possui:`);
  console.log(`Vogais: ${vogais}`);
  console.log(`Consoantes: ${consoantes}`);
  leitor.close();
});