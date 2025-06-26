let vetor: number[] = [];
let maior: number = -1;
let menor: number = 101;
let posMaior: number = -1;
let posMenor: number = -1;
for (let i = 0; i < 30; i++) {
  let num = Math.floor(Math.random() * 100 + 1);
  vetor.push(num);
  if (num > maior) {
    maior = num;
    posMaior = i;
  }
  if (num < menor) {
    menor = num;
    posMenor = i;
  }
}
console.log("Elementos do vetor:");
console.log(vetor);
console.log(`Maior número gerado: ${maior} (posição: ${posMaior})`);
console.log(`Menor número gerado: ${menor} (posição: ${posMenor})`);