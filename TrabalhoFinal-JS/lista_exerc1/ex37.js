// Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário.

var readline = require(`readline-sync`)
var N = Number(readline.question(`Digite o numero da tabuada: `))

for(var x = 1; x <= 10; x += 1){
    console.log(`${N} x ${x} = ${N * x}`)
}