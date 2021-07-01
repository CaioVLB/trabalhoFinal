//25. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.G. 
// contendo 10 valores.

// a = a1 . razao**n
const readline = require(`readline-sync`)
var valorA = Number.parseInt(readline.question(`Digite um valor inicial para a P.G.: `))
var razaoR = Number.parseInt(readline.question(`Digite uma razao para a P.G.: `))

for(var n = 1; n <= 10; n++){
    var c = valorA * (razaoR**n)
    console.log(`-> ${c}`)
}