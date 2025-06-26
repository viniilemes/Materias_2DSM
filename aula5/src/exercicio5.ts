import { Pilha } from "../types";

const pilhaDeNomes = new Pilha<string>();

pilhaDeNomes.push("Ana");
pilhaDeNomes.push("Pedro");
pilhaDeNomes.push("Luiz");
pilhaDeNomes.push("Maria");

while (true) {
  const nome = pilhaDeNomes.pop();
  if (nome === undefined) {
    break;
  }
  console.log(nome);
}