// 9. Faça um programa para gerar os n primeiros termos da seqüência: 1 1 2 3 5 8 13 21 34 55 89 ...

const readline = require(`readline-sync`)

let termo = Number(readline.question(`Qual o termo? `))

var x = 1
var y = 1
var z = 0 // Z será a soma dos dois termos anteriores

for(var c = 1; c <= termo; c++){
    x = y
    y = z

    z = x + y
    console.log(`O ${c} termo é ${z}`)
}