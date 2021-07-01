// Um  funcionário  recebe  um  salário  fixo  mais  4%  de  comissão  sobre  as  vendas.  
// Faça  um algoritmo  que  receba  o  salário  fixo  de  um  funcionário  e  o  valor  de  suas  vendas,  
// calcule  e mostre a comissão e o salário final do funcionário.

var salarioFixo = 1200

var vendas = 800              // 800 reais de vendas 
var comissao = ( 4 / 100 )
var comissaoVendas = ( vendas * comissao )

var salarioFinal = ( salarioFixo + comissaoVendas )

console.log( ` O funcionário recebeu R$ ${comissaoVendas} reais de comissão sobre as vendas e o seu salário final é R$ ${salarioFinal} reais. `)