class Pessoa {
  constructor(public nome: string, public idade: number) { }
}

function insertionSort(lista: Pessoa[]): Pessoa[] {
  let n = lista.length;

  for (let i = 1; i < n; i++) {
    let atual = lista[i];
    let j = i - 1;

    // Primeira camada: Ordenação por nome
    while (j >= 0 && lista[j].nome > atual.nome) {
      lista[j + 1] = lista[j];
      j--;
    }
    lista[j + 1] = atual;
  }

  for (let i = 1; i < n; i++) {
    let atual = lista[i];
    let j = i - 1;

    // Segunda camada: Ordenação por idade dentro dos nomes iguais
    while (j >= 0 && lista[j].nome === atual.nome && lista[j].idade > atual.idade) {
      lista[j + 1] = lista[j];
      j--;
    }
    lista[j + 1] = atual;
  }

  return lista;
}

// Teste com lista de pessoas
let pessoas = [
  new Pessoa("Carlos", 30),
  new Pessoa("Ana", 25),
  new Pessoa("Carlos", 28),
  new Pessoa("Bruno", 22),
  new Pessoa("Ana", 20)
];

console.log("Ordenação com Insertion Sort:", insertionSort(pessoas));

export { Pessoa, insertionSort };

/*P.3.17. Construa um sistema que ordene valores em uma lista de objetos contendo os atributos 
nome:string e idade:número. Seu sistema deve ordenar os valores primeiramente pelo nome e, 
posteriormente, pela idade. Note que seu algoritmo de ordenação deverá operar em 2 camadas. 
A primeira ordena pelo nome e a segunda ordena os objetos de mesmo nome mas utilizando o 
telefone. Faça a devida adaptação no algoritmo de ordenação da bolha fornecido pelo professor. 

P.3.18. Repita o problema 3.17 mas utilizando o algoritmo da inserção.