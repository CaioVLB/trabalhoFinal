/*
14. Agora altere esse algoritmo para que imprima os números em ordem decrescente.
*/

var readline = require(`readline-sync`)

var num1 = Number(readline.question(`Digite um numero: `))
var num2 = Number(readline.question(`Digite outro numero: `))
var num3 = Number(readline.question(`Digite mais um numero: `))

if (num1 >= num2 && num1 >= num3){             
    if (num2 >= num3) {
        console.log(num1, num2, num3)
    }else{
        console.log(num1, num3, num2)
    }
} else if(num2 >= num1 && num2 >= num3){
    if (num1 >= num3) {
        console.log(num2, num1, num3)
    }else{
        console.log(num2, num3, num1)
    }
}else{
    if(num2 >= num1){
        console.log(num3, num2, num1)
    }else{
        console.log(num3, num1 , num2)
    }
}