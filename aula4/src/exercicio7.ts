class Cliente {
  // Construtor privado [cite: 128]
  private constructor(private nome: string, private idade: number) {
  }

  // Método de fábrica estático para criar instâncias [cite: 128]
  public static criar(nome: string, idade: number): Cliente {
    return new Cliente(nome, idade);
  }

  public print(): void {
    console.log(this.nome, this.idade);
  }
}

// Crie um objeto do tipo Cliente usando o método estático 'criar' [cite: 127]
const cliente = Cliente.criar("Ana", 18);

// Imprima suas propriedades usando o método print [cite: 127]
cliente.print();