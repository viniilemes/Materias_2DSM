class Numero {
  protected aleatorio(): number {
    return Math.floor(Math.random() * 100);
  }
}

class Categoria extends Numero { }

class Teste extends Categoria {
  public getAleatorio(): number {
    return this.aleatorio();
  }
}

const teste = new Teste();
console.log("Valor:", teste.getAleatorio());