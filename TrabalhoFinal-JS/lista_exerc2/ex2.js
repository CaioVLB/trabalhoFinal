/*

Crie um algoritmo que, dado três números informados pelo usuário, informe qual é o maior deles.

*/

var readline = require(`readline-sync`)
var numb1 = Number(readline.question(`Digite um numero: `))
var numb2 = Number(readline.question(`Digite outro numero: `))
var numb3 = Number(readline.question(`Digite mais um numero: `))

if (numb1 > numb2 && numb1 > numb3){                      // && = E => só é true se as duas condições forem verdade
    console.log(` O número ${numb1} é o maior. `)

} else if (numb2 > numb1 && numb2 > numb3){
    console.log(` O número ${numb2} é o maior.`)

} else {
    console.log(` O número ${numb3} é o maior. `)
}