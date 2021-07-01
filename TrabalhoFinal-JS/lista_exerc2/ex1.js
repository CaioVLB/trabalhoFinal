/*

Crie um algoritmo que, dado dois números informados pelo usuário, informe a soma deles.

*/

var readline = require(`readline-sync`)
var number1 = Number(readline.question(`Digite um numero: `))
var number2 = Number(readline.question(`Digite um numero: `))

console.log(`A soma dos números é: ${number1 + number2}`)