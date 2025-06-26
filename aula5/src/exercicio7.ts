import { Carro } from "../types";

class Uno implements Carro {
  constructor(public consumo: number, public velocidade: number, public coeficiente: number) { }

  frenagem(): number {
    // Cálculo da distância percorrida ao frear um automóvel: D = V^2 / (250 * u)
    return (this.velocidade ** 2) / (250 * this.coeficiente);
  }

  gasto(distancia: number): number {
    // gasto = distancia / consumo
    return distancia / this.consumo;
  }
}

const uno = new Uno(12.5, 90, 1);
console.log(`Gasto para percorrer 100km: ${uno.gasto(100)} litros`);
console.log(`Distância percorrida ao frear o carro: ${uno.frenagem()} metros`);