// Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. 
// Faça  um  algoritmo  para  calcular  quantos  litros  de  água  e  de  suco  são  necessários  
// para  se fazer X litros de refresco (informados pelo usuário). 

var litrosRefresco = 2  // 2 litros de refresco

var cadaParte = 0.2    // cada parte do tonel possui 200 ml => 0.2 litros

var aguaMineral = 8    // 8 partes de água mineral
var suco = 2           // 2 partes de suco

var litrosAgua = ( aguaMineral * cadaParte )
var quantidadeSuco = ( suco * cadaParte )

console.log(` Para se fazer ${litrosRefresco} litros de refresco é necessário ${litrosAgua} litros de água e ${quantidadeSuco} de suco. `)