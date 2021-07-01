/*
Crie um algoritmo que, dados os lados de um triângulo informados pelo usuário, calcule a sua área.
*/

// Fórmula para calcular a área de um triângulo é Área = base x altura / 2

var readline = require(`readline-sync`)
var base = Number(readline.question(`Digite um numero para a base: `))
var altura = Number(readline.question(`Digite um numero para a altura: `))

area = (base * altura) / 2
console.log(`A área do triângulo informado é ${area} cm².`)