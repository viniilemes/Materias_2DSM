let nota1: number, nota2: number, nota3: number, media: number;

nota1 = 7.5;
nota2 = 8;
nota3 = 9;

media = (nota1 + nota2 + nota3) / 3;

console.log("A média final do aluno é: ", media.toFixed(2));

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}