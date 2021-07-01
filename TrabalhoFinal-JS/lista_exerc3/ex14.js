// 14. Faça um programa que leia um número n e mostre na tela os n primeiros números pares e depois os n 
// primeiros números ímpares

const readline = require(`readline-sync`)

var num = (readline.question(`Digite um numero: `))
console.log(" ")
console.log(`O número escolhido foi o ${num}`)
console.log(" ")

for(var x = 0; x <= num; x++){

    if(x % 2 == 0){
        console.log(`O números ${x} é par`)
        
    }else{
        console.log(`O números ${x} é impar`)
    }
    
}