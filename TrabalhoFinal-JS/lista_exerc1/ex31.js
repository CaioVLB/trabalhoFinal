// Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: a) o novo peso se a  pessoa  
// engordar  15%  sobre  o  peso  digitado;  b)  o  novo  peso  se  a  pessoa  emagrecer  20% sobre o 
// peso digitado.

var pesoPessoa = 80             // 80 kg

var engordar15 = ( 15 / 100 )
var novoPesoA = ( pesoPessoa * engordar15 )
var questA = ( pesoPessoa + novoPesoA )

var emagrecer20 = ( 20 / 100 )
var novoPesoB = ( pesoPessoa * emagrecer20 )
var questB = ( pesoPessoa - novoPesoB )

console.log(` Se uma pessoa que tenha ${pesoPessoa} Kg engordar 15% do seu peso ela terá ${questA} Kg, mas se ela emagrecer 20% do seu peso ela terá ${questB} Kg. `)