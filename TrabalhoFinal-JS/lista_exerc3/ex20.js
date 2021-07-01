// 20. Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos 
// seguintes intervalos: [0-25],[26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um 
// número negativo.
const readline = require(`readline-sync`)
var cont0 = 0
var cont26 = 0
var cont51 = 0
var cont76 = 0
while(true){
    var num = Number(readline.question(`Digite um numero: `))
    if(num <= -1){
        break
    }
    if(num >= 0 && num <=25){
        cont0++
    }
    if(num >= 26 && num <= 50){
        cont26++
    }
    if(num >= 51 && num <= 75){
        cont51++
    }
    if(num >= 76 && num <= 100){
        cont76++
    }

}
console.log(`A quantidade de números digitados que estão entre [0-25] foi: ${cont0}`)
console.log(`A quantidade de números digitados que estão entre [26-50] foi: ${cont26}`)
console.log(`A quantidade de números digitados que estão entre [51-75] foi: ${cont51}`)
console.log(`A quantidade de números digitados que estão entre [76-100] foi: ${cont76}`)