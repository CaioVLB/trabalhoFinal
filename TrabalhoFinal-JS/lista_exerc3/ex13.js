// 13. Faça um programa que leia as médias finais de vários alunos de uma turma e mostre a maior média, 
// a menor média e a média aritmética da turma. O programa para quando encontrar uma média negativa.

const readline =  require(`readline-sync`)

console.log(" ")
console.log("Digite a quantidade de médias que desejar")
console.log(" ")

var qntdNumeros = Number(readline.question(`Quantas medias voce deseja digitar? `))

var soma = 0
for(var x = 1; x <= qntdNumeros; x++ ){
    var num = Number(readline.question(`Digite a media: `))

    if(x == 1){
        var maior = num
        var menor = num
    }
    else{
        if(num > maior){
            maior = num
        }
        if(num < menor){
            menor = num
        }
    }
    soma+=num
}
console.log(`O menor número digitado foi: ${menor}`)
console.log(`O maior número digitado foi: ${maior}`)
console.log(`A média da turma é: ${(soma/qntdNumeros).toFixed(1)}`)