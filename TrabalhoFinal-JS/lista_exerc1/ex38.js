// Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:  
// a)  a  idade  dessa  pessoa  em  anos;  b)  a  idade  dessa  pessoa  em  meses;  
// c)  a  idade dessa pessoa em dias; d) a idade dessa pessoa em semanas.

var anoNasc = 1977
var anoAtual = 2021

var idadeAnos = ( anoAtual - anoNasc )
var idadeMeses = ( idadeAnos * meses )       ;      var meses = 12          // Quantidade de meses em um ano
var idadeDias = ( idadeAnos * diasAno )      ;      var diasAno = 365       // Quantidade de dias em um ano
var idadeSeman = ( idadeAnos * semanAno )    ;      var semanAno = 52.1429  // Quantidade de semanas em um ano

console.log(` Uma pessoa que nasceu em ${anoNasc} tem ${idadeAnos} anos, ${idadeMeses} meses, ${idadeDias} dias e ${idadeSeman} semanas de idade. `)

