/*
17. Problemas simples do cotidiano podem representar desafios para o mundo computacional. 
Faça um algoritmo que, dados três números inteiros representando dia, mês e ano de uma data, 
imprima qual o dia seguinte.
*/

const readline = require(`readline-sync`)

var dia = Number(readline.question(`dia: `))
var mes = Number(readline.question(`mes: `))
var ano = Number(readline.question(`ano: `))

if(dia >= 1 && dia < 30){
    
    if(dia < 9){
        dia = `0` + (dia + 1)
    }else{
        dia++
    }
    
} else if(dia == 30){
    if(mes == 12){
        dia = 1
        mes = 1
        ano++
    }else{
        dia = 1
        mes++
    }
}
console.log(`${dia}\\${mes}\\${ano}`)