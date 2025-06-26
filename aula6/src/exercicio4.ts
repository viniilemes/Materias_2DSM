class Pilha<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T {
    const item = this.items.pop();
    if (item === undefined) {
      throw new Error("Pilha vazia");
    }
    return item;
  }
}

const nomes = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José"];
const pilha = new Pilha<string>();

for (let i = 0; i < nomes.length; i++) {
  pilha.push(nomes[i]);
}

let item: string | undefined;
try {
  while (true) {
    item = pilha.pop();
    console.log(item);
  }
} catch (e: any) {
  console.log(e.message);
} finally {
  console.log("Fim do programa");
}