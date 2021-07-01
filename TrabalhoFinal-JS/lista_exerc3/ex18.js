// 18. Desenvolver um algoritmo que leia a altura de 15 pessoas. 
// Este programa deverá calcular e mostrar :a. A menor altura do grupo; b. A maior altura do grupo;

const readline = require(`readline-sync`)

for(var x = 1; x <= 15; x++){
    var alt = Number(readline.question(`Qual e a ${x} altura? `))
    if(x == 1){
        var maior = alt
        var menor = alt
    }else{
        if(alt > maior){
            maior = alt
        } 
        if(alt < menor){
            menor = alt
        }
    }
}
console.log(`A maior altura é ${maior}`)
console.log(`A menor altura é ${menor}`)