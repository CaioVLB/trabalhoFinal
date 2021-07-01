/*
Considerando o sistema de notas da UTFPR, construa um algoritmo que, dadas 4 notas parciais de 
um aluno pelo usuário, calcule a média e imprima se o aluno foi aprovado,reprovado ou reprovado, 
mas com quebra de pré-requisito.
*/

// fórmula usada para calcular MÉDIA é Média = w + x + y + z / n° de termos (4)

var readline = require(`readline-sync`)
var nota1 = Number(readline.question(`Digite a primeira nota: `))
var nota2 = Number(readline.question(`Digite a segunda nota: `))
var nota3 = Number(readline.question(`Digite a terceira nota: `))
var nota4 = Number(readline.question(`Digite a quarta nota: `))

media = ( nota1 + nota2 + nota3 + nota4 ) / 4

if ( media > 6 ){
    console.log(`O aluno tem média ${media} e está aprovado.`)

}
else if(media == 6){
    console.log(`O aluno tem média ${media} e está de recuperação.`)

}else{
    console.log(`O aluno tem média ${media} e está reprovado.`)
}