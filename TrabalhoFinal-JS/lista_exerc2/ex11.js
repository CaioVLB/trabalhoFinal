/*
Agora altere o algoritmo anterior de maneira que ele permita que o professor, antes de informar as notas, 
informe os seus respectivos pesos.Depois disso o algoritmo deve, de análoga ao exercício anterior, calcular 
a média, no entanto, agora considerando os seus pesos. Lembrete: A soma dos pesos das notas sempre deve ser 10.
*/

// fórmula usada para calcular MÉDIA PONDERADA é Média p = w * peso1 + x * peso2 + y * peso3 + z * peso4 / soma dos pesos (10)

var readline = require(`readline-sync`)
var nota1 = Number(readline.question(`Digite a primeira nota sabendo que ela possui peso 2: `))
var nota2 = Number(readline.question(`Digite a segunda nota sabendo que ela possui peso 2: `))
var nota3 = Number(readline.question(`Digite a terceira nota sabendo que ela possui peso 2: `))
var nota4 = Number(readline.question(`Digite a quarta nota sabendoq que ela possui peso 4: `))

var peso1 = 2
var peso2 = 2
var peso3 = 2
var peso4 = 4

media = ( (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) ) / 10
console.log(`A média do aluno foi ${media}.`)

if ( media > 6 ){
    console.log(`O aluno está aprovado.`)

}else if(media == 6){
    console.log(`O aluno está de recuperação.`)

}else {
    console.log(`O aluno está reprovado.`)
}