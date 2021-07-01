//24. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.A. 
// contendo 10 valores.
const readline = require(`readline-sync`)
var valorA = Number.parseInt(readline.question(`Digite um valor inicial para a P.A: `))
var razaoR = Number.parseInt(readline.question(`Digite uma razao para a P.A: `))

for(var x = 1; x <= 10; x++){
    console.log(`termo: ${valorA + (x*razaoR)}`)
}