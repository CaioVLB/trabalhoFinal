/*
23. Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. 
Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela 
abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.

 Saldo médio         Percentual
de 0 a 200          nenhum crédito
de 201 a 400        20% do valor do saldo médio
de 401 a 600        30% do valor do saldo médio acima
de 601              40% do valor do saldo médio
*/

const readline = require(`readline-sync`)

var saldo = Number(readline.question(`Digite o seu saldo medio: `))

var credito  = (saldo * 0.2)
var credito2 = (saldo * 0.3)
var credito3 = (saldo * 0.4)

if(saldo <= 200){
    console.log(`O seu saldo médio é de ${saldo} e não possui direito ao crédito especial.`)

}else if(saldo >= 201 || saldo <=400){
    console.log(`O seu saldo médio é de ${saldo} e o valor do seu crédito especial é de R$ ${credito} reais. `)

}else if(saldo >= 401 || saldo <=600){
    console.log(`O seu saldo médio é de ${saldo} e o valor do seu crédito especial é de R$ ${credito2} reais. `)

}else if(saldo >= 601){
    console.log(`O seu saldo médio é de ${saldo} e o valor do seu crédito especial é de R$ ${credito3} reais. `)

}