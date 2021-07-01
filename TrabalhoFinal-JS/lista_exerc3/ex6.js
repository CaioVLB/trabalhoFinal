//6. Dado um número n inteiro e positivo, dizemos que n é perfeito se n for igual à soma de seus divisores positivos 
//diferentes de n. Construa um programa que verifica se um dado número é perfeito. Ex: 6 é perfeito, pois 1+2+3 = 6.

const readline =  require(`readline-sync`)
let number = Number(readline.question(`Digite um numero: `))

let x = 1   // contador
let somador = 0
while( x < number){
    if(number%x == 0){
        console.log(`${number} é divisível por ${x}.`)
        somador+=x // 1 2 3
    } 
    x+=1
}
if(number == somador){
    console.log(`${number} é perfeito.`)
}else{
    console.log(`o ${number} não é perfeito.`)
}