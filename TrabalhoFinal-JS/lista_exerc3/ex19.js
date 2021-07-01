// 19. Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a 
// média aritmética dos valores lidos, a quantidadede valores positivos, a quantidadede valores negativos 
// e o percentual de valores negativos e positivos.

const readline = require(`readline-sync`)

var qntdN = Number(readline.question(`Quantos numeros voce deseja digitar? `))

var soma = 0
var vPositivo = 0
var vNegativo = 0
for(var x = 1; x <= qntdN; x++){
    var n = Number(readline.question(`Qual o numero? `))
    if(n > 0){
        vPositivo++
    }else{
        vNegativo++
    }
    soma+=n
}
var media = (soma/qntdN)
var percentualP = (vPositivo/qntdN)
var percentualN = (vNegativo/qntdN)
console.log(`
A media aritmética dos valores digitados: ${media}
A quantidade de valores positivos: ${vPositivo}
A quantidade de valores negativos: ${vNegativo}
O percentual de valores positivos: ${percentualP}
O percentual de valores negativos: ${percentualN}
`)