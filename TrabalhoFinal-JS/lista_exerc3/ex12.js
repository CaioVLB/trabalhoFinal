// 12. Faça um programa que leia vários conjuntos de três valores reais e mostre para cada conjunto: 
// sua soma, seu produto e sua média. O programa para quando um conjunto não entrar com seus valores em ordem crescente.
const readline = require(`readline-sync`)
var stop = false
while(true){
    var soma = 0
    var mult = 1
    if(stop){
        break
    } else{
        start = 0
        for(var x = 1; x <= 3; x++){
            var num = Number.parseInt(readline.question(`Digite ${x} numero: `))
            soma += num
            mult *= num
            if(x == 1){
                start = num
            }
            else{
                if(start > num){
                    console.log("\nO programa para ao colocar valores decrescente.\n")
                    mult = 0
                    stop = true
                    break
                } 
            }
        }
        console.log(`Soma dos números digitados: ${soma}`)
        console.log(`Produto dos números digitados: ${mult}`)
        console.log(`Média dos números digitados: ${soma/3}`)
    } 
}