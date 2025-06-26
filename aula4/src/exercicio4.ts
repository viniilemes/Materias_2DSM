class Carro {
  // Propriedades definidas e inicializadas nos parâmetros do construtor com readonly [cite: 43, 109]
  // Como queremos apenas getters, essas propriedades serão privadas e readonly
  constructor(private readonly _marca: string, private readonly _modelo: string) { }

  // Getter para 'marca'
  public get marca(): string {
    return this._marca;
  }

  // Getter para 'modelo'
  public get modelo(): string {
    return this._modelo;
  }
}

// O código de teste fornecido no PDF assume a configuração direta da propriedade, o que não funcionará apenas com getters.
// Precisamos instanciar com valores no construtor.
const carro = new Carro("VW", "Gol"); // Instancie com valores diretamente
console.log(carro); // Exemplo de saída: Carro {_marca: 'VW', _modelo: 'Gol' } 
// Se você quiser logar as propriedades específicas
// console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}`);