// A  fábrica  de  refrigerantes  Meia-Cola  vende  seu  produto  em  três formatos:  
// lata  de  350  ml, garrafa  de  600  ml  e  garrafa  de  2  litros.  Se  um  comerciante  
// compra  uma  determinada quantidade de cada formato, faça um algoritmo para calcular  quantos 
// litros de refrigerante ele comprou

var lata       = 0.35         ;        var unidadeLata   = 36
var garrafa600 = 0.6         ;        var unidadeGarrafa = 36
var garrafa2   = 2           ;        var unidadeGarraf  = 36

var litrosLata = ( lata * unidadeLata )
var litrosGarrafa600 = ( garrafa600 * unidadeGarrafa )
var litrosGarrafa2 = ( garrafa2 * unidadeGarraf )

var resultadoLitros = ( litrosLata + litrosGarrafa600 + litrosGarrafa2 )

console.log( ` O comerciante comprou um total de ${resultadoLitros .toFixed(0)} litros da fábrica Meia-Cola. ` )