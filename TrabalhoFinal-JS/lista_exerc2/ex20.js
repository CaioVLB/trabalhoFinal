/*
20. Escrever um algoritmo que lê um valor em reais e calcule qual o menor número possível de notas de 
100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto. Escrever o valor lido e a relação de notas 
necessárias.
*/

const readline = require(`readline-sync`)

let valor = Number(readline.question(`Digite um valor:`))

const notas = [100, 50, 10, 5, 1];

console.log(valor);

for(let nota of notas){
    let quantNotas = parseInt(valor / nota);
    console.log(`${quantNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}