function converter(vet){ 
  const res = []; 
  for(let i = 0; i < vet.length; i++){ 
      res[i] = "" + vet[i]; 
  } 
  return res; 
} 

const vetor = [5,3,1,8,2]; 
console.log("Resultado:", converter(vetor)); 
x: number = 1;