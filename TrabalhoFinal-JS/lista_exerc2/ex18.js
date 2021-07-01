/*
18. Agora, crie um algoritmo que imprima o dia anterior da data informada.
*/

const readline = require(`readline-sync`)

var dia = Number(readline.question(`dia: `))
var mes = Number(readline.question(`mes: `))
var ano = Number(readline.question(`ano: `))

if(dia > 1 && dia <= 30){
    
    if(dia < 9){
        dia = `0` + (dia - 1)
    }else{
        dia--
    }

} else if(dia == 1){
    if(mes == 1){
        dia = 30
        mes = 12
        ano--
    }else{
        dia = 30
        mes--
    }
}
console.log(`${dia}\\${mes}\\${ano}`)