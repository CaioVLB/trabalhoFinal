// 11. Faça um programa que leia vários inteiros positivos e mostre, no final, a soma dos números pares e a soma 
// dos números ímpares. O programa para quando entrar um número maior que 1000.

const readline =  require(`readline-sync`)
console.log(" ")
console.log("Digite a quantidade de números que desejar, quando quiser parar, digite um número acima de 1000.")
console.log(" ")

var contPar = 0
var contIm = 0
while(true){
    var num = Number(readline.question(`Digite um numero: `))
    if(num > 1000){
        break
    }if(num%2==0){
        contPar+=num      
    }else{
        contIm+=num       
    }
}
console.log(`A soma dos números pares é ${contPar}.`)
console.log(`A soma dos números impares é ${contIm}.`)