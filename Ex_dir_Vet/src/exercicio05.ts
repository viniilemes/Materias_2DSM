let maior: number = 0;
let numeros: number[] = [];
for (var i: number = 0; i < 20; i++) {
  numeros[i] = Math.floor(Math.random() * 100 + 1);
  console.log(numeros[i]);
}
for (var i: number = 0; i < 20; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}
console.log("O maior elemento no vetor é:", maior);