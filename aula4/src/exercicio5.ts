// Reutilizando a classe Carro do Exercício 4
class Carro {
  constructor(private readonly _marca: string, private readonly _modelo: string) { }

  public get marca(): string {
    return this._marca;
  }

  public get modelo(): string {
    return this._modelo;
  }
}

// Crie um array de objetos Carro
const carros: Carro[] = [];

// Adicione 3 objetos Carro ao array
carros.push(new Carro("VW", "Gol"));
carros.push(new Carro("Fiat", "Uno"));
carros.push(new Carro("GM", "Corsa"));

// Imprima o conteúdo do array
console.log(carros); // Imprime o conteúdo do array no terminal [cite: 121]