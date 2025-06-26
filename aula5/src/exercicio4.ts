import { Livro } from "../types";

class Revista extends Livro {
  constructor(titulo: string, ano: number, public edicao: number) {
    super(titulo, ano);
  }

  print(): void {
    console.log(`${this.titulo}: ${this.ano} ${this.edicao}`);
  }
}

const revista = new Revista("Superinteressante: O futuro da IA", 2023, 448);
revista.print();