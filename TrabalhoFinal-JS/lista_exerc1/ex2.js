//Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os
//cavalos comprados para um haras. 
//quantidade de cavalos
//um cavalo tem quantro patas
//a quantidade de ferraduras será calculada a partir da multiplicação entre
// ferraduras e a quantidade de patas de cada cavalo

var quantidadeCavalos = 30
var quantidadePatas = 4 //quantidade de patas de um cavalo
var quantidadeFerraduras = ( quantidadeCavalos * quantidadePatas )

console.log(` a quantidade de ferraduras para ${quantidadeCavalos} cavalos é ${quantidadeFerraduras} `)