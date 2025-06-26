function somar(a: number, b: number): number {
  if (a < 0 || b < 0) {
    throw new Error("Não é possível somar números negativos");
  }
  return a + b;
}

function subtrair(a: number, b: number): number {
  if (a < b) {
    throw new Error("Não é possível subtrair, pois o primeiro número é menor que o segundo");
  }
  return a - b;
}

try {
  const s1 = somar(10, 5);
  console.log("Soma 1:", s1);
  const s2 = somar(10, -5);
  console.log("Soma 2:", s2);
} catch (e: any) {
  console.log("Exceção da soma:", e.message);
}

try {
  const sub1 = subtrair(10, 5);
  console.log("Subtração 1:", sub1);
  const sub2 = subtrair(5, 10);
  console.log("Subtração 2:", sub2);
} catch (e: any) {
  console.log("Exceção da subtração:", e.message);
}