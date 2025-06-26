class Questao {
  // Atributos
  enunciado: string;
  valor: number;

  // Construtor
  constructor(enunciado: string, valor: number) {
    this.enunciado = enunciado;
    this.valor = valor;
  }

  // Método print
  print(): void {
    console.log(`${this.enunciado} (${this.valor} pts.)`);
  }
}

// Testando a classe
const questao = new Questao("O que é um array?", 0.5);
questao.print();