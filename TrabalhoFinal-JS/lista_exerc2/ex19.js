/*
19. Faça um algoritmo que, dado o valor total em reais e o número de prestações desejadas, calcule o valor 
de cada prestação. O número mínimo de prestações deve ser 12.Se o número de prestações for maior ou igual 
a 24,adicione 10% de juros ao valor total, se for maior ou igual a 36, adicione 15% de juros ao valor total.
*/

var readline = require(`readline-sync`)
var valor = Number(readline.question(`Digite o valor total: `))
var prestacao = Number(readline.question(`Digite a quantidade de prestacoes: `))        

var valorPrestacao = (valor / prestacao)

/* ------------------------------------------------- */

var juros2 = (10 / 100)

var valorJuros2 = (valor * juros2)
var novoValor2 = (valor + valorJuros2)

/* ------------------------------------------------- */

var juros3 = (15 / 100)

var valorJuros3 = (valor * juros3)
var novoValor3 = (valor + valorJuros3)

if( prestacao >= 12 && prestacao < 24 ){
    console.log(`O valor de cada prestação será R$ ${valorPrestacao.toFixed(2)} reais.`)

}else if(prestacao >= 24 && prestacao < 36){
    console.log(`O valor de cada prestação será R$ ${valorPrestacao.toFixed(2)} reais e o novo valor total será R$ ${novoValor2} reais.`)

}else if(prestacao >= 36){
    console.log(`O valor de cada prestação será R$ ${valorPrestacao.toFixed(2)} reais e o novo valor total será R$ ${novoValor3} reais.`)

}else{
    console.log(`A quantidade mínima de prestações são 12.`)
}