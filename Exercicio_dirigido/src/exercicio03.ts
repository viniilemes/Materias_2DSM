class Aleatorio { 
  get(): number {return Math.floor(Math.random() * 100 + 1); 
  } 
} 

export{};
// Cria uma instância da classe Aleatorio
const aleatorio = new Aleatorio();

// Imprime 5 números aleatórios no terminal
for (let i = 0; i < 5; i++) {
    console.log(aleatorio.get());
}