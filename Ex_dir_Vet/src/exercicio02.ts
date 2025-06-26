let numeros: number[] = Array(5);
for (let i: number = 0; i < 5; i++) {
  numeros[i] = Math.floor(Math.random() * 100 + 1);
}
console.log("Quarto elemento (posição 3):", numeros[3]);