/*
5. Faça um programa que calcula o produto dos números digitados pelo usuário. O programa deve permitir que o 
usuário digite uma quantidade não determinada de números. O programa encerra quando o usuário digita o valor zero.
*/
const readline =  require(`readline-sync`)
console.log(`Digite a quantidade de números que deseje multiplicar e quando quiser parar digite "0".`)

var multiplicador = 1
while(true){
    let numberUser = Number(readline.question(`Digite um numero: `))
    if(numberUser == 0){
        console.log(`O resultado é ${multiplicador}.`)
        break
    }
    multiplicador*=numberUser
}