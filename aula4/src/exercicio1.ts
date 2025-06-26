class Operacao1 {
  private x: number;
  private y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public somar(): number {
    return this.x + this.y;
  }
}

const op = new Operacao1(5, 15);
console.log("Somar:", op.somar());