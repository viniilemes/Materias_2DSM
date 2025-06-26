let salarioAtual: number;
let percentualReajuste: number;
let novoSalario: number;
salarioAtual = 2500.00;
percentualReajuste = 0.15;
novoSalario = salarioAtual * (1 + percentualReajuste);
console.log("Salário Antigo: R$ ", salarioAtual.toFixed(2));
console.log("Percentual de Reajuste: ", (percentualReajuste * 100).toFixed(0), "%");
console.log("Novo Salário: R$ ", novoSalario.toFixed(2));