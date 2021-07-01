// Faça  um  algoritmo  que  receba  duas  notas,  calcule  e  mostre  a  média  ponderada  
// dessas notas, considerando peso 2 para a primeira nota e peso 3 para a segunda nota.

// fórmula média pondera =  x * pesoX + y * pesoY / pela soma dos pesos

var notaX = 9.5  ;  var pesoX = 2
var notaY = 8.75 ;  var pesoY = 3

var somaPeso = ( pesoX + pesoY )

var mediaPonderada = ( ( notaX * pesoX ) + ( notaY * pesoY ) ) / somaPeso

console.log( `A média ponderada das notas X e Y é ${mediaPonderada}` )