let v1: number[] = [];
let v2: number[] = [];
let v3: number[] = [];
for (let i = 0; i < 10; i++) {
  v1.push(Math.floor(Math.random() * 100 + 1));
  v2.push(Math.floor(Math.random() * 100 + 1));
}
v3 = v1.concat(v2);
console.log("Vetor v1:", v1);
console.log("Vetor v2:", v2);
console.log("Vetor v3 (combinado):", v3);