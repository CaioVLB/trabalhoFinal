// 21. Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. 
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. 
// O número que encerrará a leitura será zero.

const readline = require(`readline-sync`)
console.log(``)
console.log(`Digite a quantidade de números que desejar, quando quiser parar, digite "0".`)
console.log(``)
var contI = 0
var contP = 0
var contN = 0  // quantidade de números digitados
var somaP = 0
var somaI = 0
while(true){
    var n = Number(readline.question(`Digite um numero: `))
    if(n == 0){
        break
    }
    if(n%2==0){
        contP++ 
        somaP+=n
    }
    else{
        contI++
        somaI+=n
    }
    contN++
}
console.log(`Você digitou ${contP} números pares e ${contI} números impares;`)
console.log(`A média dos números pares digitados é: ${(somaP/contN).toFixed(2)};`)
console.log(`A média geral de todos os números foi: ${((somaI + somaP) / contN)}`)