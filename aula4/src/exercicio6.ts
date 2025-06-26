class Carro {
  private static contador: number = 0;

  constructor(private readonly _marca: string, private readonly _modelo: string) {
    Carro.contador++;
  }

  public get marca(): string {
    return this._marca;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public static getContador(): number {
    return Carro.contador;
  }
}

const a = new Carro("VW", "Gol");
const b = new Carro("Fiat", "Uno");
const c = new Carro("GM", "Corsa");

console.log("Quantidade de objetos Carro criados:", Carro.getContador());