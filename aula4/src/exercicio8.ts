class Matematica {
    constructor(private a: number, private b: number) { }

    protected somar(): void {
        console.log("Soma:", this.a + this.b);
    }

    protected subtrair(): void {
        console.log("Diferença:", this.a - this.b);
    }
}

class Calcular extends Matematica {
    public executarSoma(): void {
        this.somar();
    }

    public executarSubtracao(): void {
        this.subtrair();
    }
}

const calc = new Calcular(5, 3);
calc.executarSoma();
calc.executarSubtracao();