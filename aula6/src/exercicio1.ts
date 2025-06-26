function imc(peso: number, altura: number): number {
  if (altura === 0) {
    throw new Error("Divisão por zero");
  }
  return peso / (altura ** 2);
}

try {
  const resultado = imc(70, 0);
  console.log("Resultado:", resultado);
} catch (e: any) {
  console.log("Exceção:", e.message);
} finally {
  console.log("Passa por aqui");
}