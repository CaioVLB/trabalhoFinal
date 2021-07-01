/*
1. Escreva um programa que lê 15 valores reais, encontre o maior e o menor deles e mostra o resultado.
*/
const readline = require(`readline-sync`)

for(var x = 1; x <= 15; x++){
    var numerUsuario = Number(readline.question(`Digite o ${x} numero: `))

    if(x == 1){
        var maior = numerUsuario
        var menor = numerUsuario
    }
    else{
        if(numerUsuario > maior){
            maior = numerUsuario

        }
        if(numerUsuario < menor){
            menor = numerUsuario
        }
    }

}
console.log(`O maior número é o ${maior}.`)
console.log(`O menor número é o ${menor}.`)