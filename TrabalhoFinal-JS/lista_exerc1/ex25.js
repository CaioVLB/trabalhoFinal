// Calcule o volume de uma caixa d'água cilíndrica.

// fórmula para calcular a ÁREA DA BASE ( Ab = pi * r² ) e o VOLUME ( V = Ab * h ) h= altura; pi = 3,14 e r = raio
// A base da caixa d'água tem um raio de 1,5 metro
// A caixa d' água tem 2,5 metros de altura 
// pi = 3,14

var areaBase = ( 3.14 * 1.5**2 )    
var altura = 2.5      
var volume = ( areaBase * altura )

console.log( `A caixa d'água possui ${volume} m³.` )