// João  recebeu  seu  salário  de  R$  1200,00  e  precisa  pagar  duas  contas  
// (C1=R$200,00  e C2=R$120,00)  que  estão  atrasadas.  Como  as  contas  estão  atrasadas,  
// João  terá  de  pagar multa  de  2%  sobre  cada  conta.  Faça  um  algoritmo  que  calcule  
// e  mostre  quanto  restará  do salário do João.

var salarioJoao = 1200.00

var c1 = 200.00
var c2 = 120.00

var multa = ( 2 / 100 )

var valorMulta1 = ( c1 * multa )
var valorMulta2 = ( c2 * multa )

var multa1 = ( c1 + valorMulta1 )
var multa2 = ( c2 + valorMulta2 )

var somaMulta = ( multa1 + multa2 )

var salarioFinal = ( salarioJoao - somaMulta )

console.log( ` Restará R$ ${salarioFinal} reais do salário de João. ` )