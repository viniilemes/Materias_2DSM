import { Pilha, Ponto } from "../types";

const pilhaDePontos = new Pilha<Ponto>();

pilhaDePontos.push({ x: 1, y: 2 });
pilhaDePontos.push({ x: 2, y: 3 });
pilhaDePontos.push({ x: 3, y: 4 });
pilhaDePontos.push({ x: 4, y: 5 });

while (true) {
  const ponto = pilhaDePontos.pop();
  if (ponto === undefined) {
    break;
  }
  console.log(ponto);
}