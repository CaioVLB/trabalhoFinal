/*

Crie um algoritmo que, dado três números informados pelo usuário, informe qual é o menor deles.

*/

var readline = require(`readline-sync`)
var numberOne = Number(readline.question(`Digite um numero: `))
var numberTwo = Number(readline.question(`Digite outro numero: `))
var numberThree = Number(readline.question(`Digite mais um numero: `))

if (numberOne < numberTwo && numberOne < numberThree){
    console.log(` O número ${numberOne} é o menor. `)

} else if (numberTwo < numberOne && numberTwo < numberThree){
    console.log(` O número ${numberTwo} é o menor. `)

} else {
    console.log(` O número ${numberThree} é o menor.`)
}