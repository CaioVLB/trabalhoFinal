//Ler  um  número  inteiro  (assuma  até  três  dígitos)  e  imprimir  a  saída  da  seguinte
//forma: CENTENA = x DEZENA = x UNIDADE = x

var numInteiro = 150
var unidade = Math.floor(numInteiro / 1) % 1
var dezena = Math.floor(numInteiro / 10) % 10
var centena = Math.floor( numInteiro / 100 ) % 100

console.log( `Centena = ${centena} dezena = ${dezena} unidade = ${unidade}` )