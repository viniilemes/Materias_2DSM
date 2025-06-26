class Pilha2<T> {
  private items: T[] = [];
  push(item: T): void {
    if (this.items.length >= 5) {
      throw new Error("Pilha2 cheia");
    }
    this.items.push(item);
  }
  pop(): T {
    const item = this.items.pop();
    if (item === undefined) {
      throw new Error("Pilha2 vazia");
    }
    return item;
  }
}
const nomes2 = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José", "Carlos"];
const pilha0 = new Pilha2<string>();
for (let i = 0; i < nomes.length; i++) {
  try {
    pilha.push(nomes[i]);
  } catch (e: any) {
    console.log(e.message, nomes[i]);
  }
}
console.log("Itens na pilha:");
try {
  while (true) {
    console.log(pilha.pop());
  }
} catch (e: any) {
  console.log(e.message);
} finally {
  console.log("Fim do programa");
}