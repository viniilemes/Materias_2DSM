class Teste { 
  somar(a: number, b: number): number; 
  somar(a: string, b: string, c: string): string; 
  somar(a: string, b: string): string; 
  somar(a: any, b: any, c?: any): any { 
      if (c !== undefined) { 
          return a + b + c; 
      } else { 
          return a + b; 
      } 
  } 
} 

const t = new Teste(); 
// usa a assinatura somar(a: number, b: number): number 
console.log(t.somar(2, 3)); 
// usa a assinatura somar(a: string, b: string, c: string): string; 
console.log(t.somar("x", "y", "z")); 
// usa a assinatura somar(a: string, b: string): string; 
console.log(t.somar("x", "y")); 