// 16. Faça um programa que leia um número n e mostre na tela os n primeiros números primos.

const readline = require(`readline-sync`)

nPrimo = (num) => {
    var cont = 0
    for(var x = 1; x <= num; x++){  // 2,3,5,7,11...
        if(num % x == 0){
            cont++
        }
    }
    if(cont == 2){ // se o contador acumular somente 2 resultado, o número é primo
        console.log(`${num} é primo.`)
    }
}
console.log(" ")
var num = Number.parseInt(readline.question(`Digite um numero: `))
console.log(" ")

for(var y = 1; y <= num; y++){
    nPrimo(y)
}