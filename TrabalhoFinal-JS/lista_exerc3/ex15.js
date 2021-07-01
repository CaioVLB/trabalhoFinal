// 15. Faça um programa que leia um número n e imprima se ele é primo ou não. 
// (um número primo tem apenas 2 divisores: 1 e ele mesmo! O número 1 não é primo!!!)

const readline = require(`readline-sync`)
console.log(" ")
var n = Number.parseInt(readline.question(`Digite um numero para saber se ele e primo: `))
console.log(" ")

var cont = 0
for(var x = 1; x <= n; x++){  // 2,3,5,7,11...
    
    if(n % x == 0){
        cont++
        console.log(`${n}/${x} = ${n/x}`)
    }
}
if(cont == 2){ // se o contador acumular somente 2 resultado, o número é primo
    console.log(`O número informado é primo.`)
}
else{   // caso o contador acumular mais de 2 números ele não é primo
    console.log(`O número informado não é primo.`)
}
