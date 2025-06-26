class Numero { 
  nros: number[] = []; 

  add(nro: number): void { 
      //adiciona o nro no final do array 
      this.nros.push(nro); 
  } 

  sum(): number { 
      let s = 0; 
      for (let i = 0; i < this.nros.length; i++) { 
          s += this.nros[i]; 
      } 
      return s; 
  } 

  max() { 
      let maior = this.nros[0]; 
      for (let i = 0; i < this.nros.length; i++) { 
          if (this.nros[i] > maior) { 
              maior = this.nros[i]; 
          } 
      } 
      return maior; 
  } 
} 