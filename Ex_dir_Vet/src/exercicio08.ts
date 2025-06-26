let vetor: number[] = [];
for (let i = 0; i < 20; i++) {
  vetor.push(Math.floor(Math.random() * 100 + 1));
}
vetor.sort((a, b) => a - b);
console.log("Vetor ordenado crescentemente:");
for (let i = 0; i < vetor.length; i++) {
  console.log(`Posição ${i}: ${vetor[i]}`);
}