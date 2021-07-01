// Faça  um  algoritmo  que  receba  o  preço  de  um produto,  calcule  e  mostre  o  novo  preço, 
// sabendo-se que este sofreu um desconto de 10%.

var monitor240Hz = 1.999
var desconto10 = ( 10 / 100 )

var desconto  = ( monitor240Hz * desconto10 )
var novoPreco = ( monitor240Hz - desconto )

console.log( `O meu sonho está avaliado em R$ ${novoPreco.toFixed(3)} reais após o desconto de 10%.` )
