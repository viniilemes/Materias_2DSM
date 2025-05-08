// Definição da classe Pessoa
class Pessoa {
  constructor(public nome: string, public idade: number) { }
}

// Função para ordenar uma lista de objetos usando Merge Sort
function mergeSort(lista: Pessoa[]): Pessoa[] {
  if (lista.length <= 1) {
    return lista;
  }

  const meio = Math.floor(lista.length / 2);
  const esquerda = mergeSort(lista.slice(0, meio));
  const direita = mergeSort(lista.slice(meio));

  return merge(esquerda, direita);
}

// Função de mesclagem (merge) para combinar as partes ordenadas
function merge(esquerda: Pessoa[], direita: Pessoa[]): Pessoa[] {
  let resultado: Pessoa[] = [];
  let i = 0, j = 0;

  // Primeira camada: Ordenação por nome
  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i].nome < direita[j].nome) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  resultado = resultado.concat(esquerda.slice(i)).concat(direita.slice(j));

  // Segunda camada: Ordenação por idade dentro dos grupos de nomes iguais
  resultado.sort((a, b) => a.nome === b.nome ? a.idade - b.idade : 0);

  return resultado;
}

// Criando uma lista de pessoas para testar a ordenação
const pessoas: Pessoa[] = [
  new Pessoa("Carlos", 30),
  new Pessoa("Ana", 25),
  new Pessoa("Carlos", 28),
  new Pessoa("Bruno", 22),
  new Pessoa("Ana", 20)
];

// Testando a ordenação com Merge Sort
console.log("Lista ordenada com Merge Sort:", mergeSort(pessoas));
