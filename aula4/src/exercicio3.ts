class Carro {
  private _marca: string = ""; // Propriedade de apoio privada 
  private _modelo: string = ""; // Propriedade de apoio privada 

  // Getter para 'marca'
  public get marca(): string {
    return this._marca;
  }

  // Setter para 'marca'
  public set marca(value: string) {
    this._marca = value;
  }

  // Getter para 'modelo'
  public get modelo(): string {
    return this._modelo;
  }

  // Setter para 'modelo'
  public set modelo(value: string) {
    this._modelo = value;
  }
}

const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro); // Exemplo de saída: Carro {_marca: 'VW', _modelo: 'Gol' }