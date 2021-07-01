/*
24. O cardápio de uma lanchonete é o seguinte:
   Especificação         Preço unitário
100 Cachorro quente          1,10
101 Bauru simples            1,30
102 Bauru c/ovo              1,50
103 Hamburger                1,10
104 Cheeseburger             1,30
105 Refrigerante             1,00
Escrever um algoritmo que leia o código do item pedido,a quantidade e calcule o valor a ser pago por 
aquele lanche. Considere que a cada execução somente será calculado um item.
*/

const readline = require(`readline-sync`)

var codigo = Number(readline.question(`Digite o codigo do seu pedido: `))
var quantPedidos = Number(readline.question(`Quantos voce vai querer? `))

var cachorQ = 1.10    ;    var codCachorQ = 100
var bauruS  = 1.30    ;    var codBauruS  = 101
var bauruOv = 1.50    ;    var codBauruOv  = 102
var hamburg = 1.10    ;    var codHamburg = 103
var cheesB  = 1.30    ;    var codCheesB  = 104
var refrig  = 1.00    ;    var codRefrig  = 105

var valorCachorQ  = (quantPedidos * cachorQ)
var valorBauruS   = (quantPedidos * bauruS)
var valorBauruOv  = (quantPedidos * bauruOv)
var valorHamburg  = (quantPedidos * hamburg)
var valorCheesB   = (quantPedidos * cheesB)
var valorRefrig   = (quantPedidos * refrig)

if(codigo == codCachorQ){
    console.log(`O código do seu pedido é ${codCachorQ}, você fez o pedido de ${quantPedidos} Cachorro quente e o tatal a pagar é R$ ${valorCachorQ.toFixed(2)} reais.`)

}else if(codigo == codBauruS){
    console.log(`O código do seu pedido é ${codBauruS}, você fez o pedido de ${quantPedidos} Bauru simples e o tatal a pagar é R$ ${valorBauruS.toFixed(2)} reais.`)

}else if(codigo == codBauruOv){
    console.log(`O código do seu pedido é ${codBauruOv}, você fez o pedido de ${quantPedidos} Bauru c/ ovo e o tatal a pagar é R$ ${valorBauruOv.toFixed(2)} reais.`)

}else if(codigo == codHamburg){
    console.log(`O código do seu pedido é ${codHamburg}, você fez o pedido de ${quantPedidos} Hamburguer e o tatal a pagar é R$ ${valorHamburg.toFixed(2)} reais.`)

}else if(codigo == codCheesB){
    console.log(`O código do seu pedido é ${codCheesB}, você fez o pedido de ${quantPedidos} Cheeseburger e o tatal a pagar é R$ ${valorCheesB.toFixed(2)} reais.`)

}else if(codigo == codRefrig){
    console.log(`O código do seu pedido é ${codRefrig}, você fez o pedido de ${quantPedidos} Refrigerante e o tatal a pagar é R$ ${valorRefrig.toFixed(2)} reais.`)

}else{
    console.log(`Você digitou o código do pedido errado!`)
}