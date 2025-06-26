class Retangulo { 
  base: number; 
  altura: number; 

  constructor(base: number, altura: number) { 
      this.base = base; 
      this.altura = altura; 
  } 

  area(): number { 
      return this.base * this.altura; 
  } 

  perimetro(): number { 
      return 2 * this.base + 2 * this.altura; 
  } 
} 

// Cria uma instância da classe Retangulo
const retangulo = new Retangulo(2, 3);

// Imprime no terminal o valor da área e perímetro
console.log(`Área: ${retangulo.area()}`); // Saída: Área: 50
console.log(`Perímetro: ${retangulo.perimetro()}`); // Saída: Perímetro: 30
