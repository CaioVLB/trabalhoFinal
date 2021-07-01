/*
21. Num determinado Estado, para transferências de veículos, o DETRAN cobra uma taxa de 1% para carros 
fabricados antes de 1990 e uma taxa de 1.5% para os fabricados de 1990 em diante, taxa esta incidindo 
sobre o valor de tabela do carro. O algoritmo abaixo lê o ano e o preço do carro e a seguir calcula e 
imprime imposto a ser pago.
*/

var readline = require(`readline-sync`)

var ano = Number(readline.question(`Digite o ano do carro: `))
var valor = Number(readline.question(`Digite o valor do carro: `))

var taxa1 = 0.01
var taxa2 = 0.015

var taxaCarro1989 = (valor * taxa1)
var taxaCarro1990 = (valor * taxa2)

if(ano < 1990){
    console.log(`O carro é de ${ano}, o preço do carro está avaliado em R$ ${valor} reais e a taxa cobrado para a transferência é de R$ ${taxaCarro1989} reais.`)

}else if(ano >= 1990 && ano <= 2021){
    console.log(`O carro é de ${ano}, o preço do carro está avaliado em R$ ${valor} reais e a taxa cobrado para a transferência é de R$ ${taxaCarro1990} reais.`)

}else{
    console.log(`Ainda não chegamos nessa data.`)
}  
