// 26. Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de A! 
// e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

const readline = require(`readline-sync`)

var valor = Number.parseInt(readline.question(`Digite um valor inicial e descubra o seu fatorial: `))

var multiplicador = 1
for(var x = valor; x >= 1; x--){
    multiplicador *= x
    console.log(x)
}
console.log(`${valor}! = ${multiplicador}`)