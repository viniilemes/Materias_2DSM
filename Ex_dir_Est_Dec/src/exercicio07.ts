var readline = require('readline');
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Digite o valor de X: \n", function (xStr: string) {
  let x = parseFloat(xStr);

  leitor.question("Digite o valor de Y: \n", function (yStr: string) {
    let y = parseFloat(yStr);

    leitor.question("Digite o valor de Z: \n", function (zStr: string) {
      let z = parseFloat(zStr);

      if (x < y + z && y < x + z && z < x + y) {
        console.log("Os valores podem formar um triângulo.");

        if (x === y && y === z) {
          console.log("É um triângulo Equilátero.");
        } else if (x === y || x === z || y === z) {
          console.log("É um triângulo Isósceles.");
        } else {
          console.log("É um triângulo Escaleno.");
        }
      } else {
        console.log("Os valores NÃO podem formar um triângulo.");
      }

      leitor.close();
    });
  });
});