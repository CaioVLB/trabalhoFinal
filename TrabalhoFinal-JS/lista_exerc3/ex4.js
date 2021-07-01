/*
4. Faça um programa que calcula e escreve a seguinte soma:soma = 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50
*/

let soma = 0
let numerador = 1

for(x = 1; x <= 50; x++ ){
    soma+=(numerador / x)
    console.log(`${numerador}/${x}`)
    numerador+=2
}
console.log(`acumulador: ${soma.toFixed(2)}`)