class Divisao {
  constructor(private a: number, private b: number) { }

  dividir(): number {
    if (this.b === 0) {
      throw new Error("Divisão por zero");
    }
    return this.a / this.b;
  }
}

try {
  const div = new Divisao(10, 0);
  console.log("Resultado da divisão:", div.dividir());
} catch (e: any) {
  console.log("Exceção da divisão:", e.message);
}