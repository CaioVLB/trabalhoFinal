/*
Crie um algoritmo que, dado três números informados pelo usuário, verifique se algum deles é 
múltiplo de outro. Note que pode haver mais de um múltiplo entre eles.
*/

const readline = require(`readline-sync`)

var one = Number(readline.question(`Digite um numero: `))
var two = Number(readline.question(`Digite outro numero: `))
var three = Number(readline.question(`Digite mais um numero: `))

if(one % one == 0){
    console.log(`${one} é multiplo de ${one}`)
}
if(one % two == 0){
    console.log(`${one} é multiplo de ${two}`)
}
if(one % three == 0){
    console.log(`${one} é multiplo de ${three}`)
}
if(two % one == 0){
    console.log(`${two} é multiplo de ${one}`)
}
if(two % two == 0){
    console.log(`${two} é multiplo de ${two}`)
}
if(two % three == 0){
    console.log(`${two} é multiplo de ${three}`)
}
if(three % one == 0){
    console.log(`${three} é multiplo de ${one}`)
}
if(three % two == 0){
    console.log(`${three} é multiplo de ${two}`)
}
if(three % three == 0){
    console.log(`${three} é multiplo de ${three}`)
}