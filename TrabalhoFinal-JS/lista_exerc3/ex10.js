// 10. Escrever um programa que calcule o número de dias decorridos entre duas datas lidas: 
// a data mais antiga e a data mais recente. Considerar a ocorrência de anos bissextos. Considerando o seguinte 
// intervalo para o valor do ano fornecido:1950-1996 (1952 foi um ano bissexto).

const readline = require(`readline-sync`)

console.log(`
Vamos descobrir quantos dias decorridos entre duas datas
`)

let data1 = Number(readline.question(`Digite uma data entre 1950-1996: `))
let data2 = Number(readline.question(`Digite outra data entre 1950-1996: \n`))

var resultDias = (data2 - data1) * 365  // total de dias sem contar com os anos bissexto

for(var x = data1; x <= data2; x++){

    // vai verficar se é um ano bissexto, caso seja, vai somar mais um
    if(x % 4 == 0 && x % 100 !== 0 || x % 400 == 0){
        resultDias += 1 
        console.log(`${x} é um ano bissexto.\n`)
    }
        else{
        console.log(`${x} não é bissexto, não ocorreu acrescimo de dias.\n`)
    }
}
console.log(`
Os dias decorridos entre as duas datas informadas: ${resultDias}\n
`)