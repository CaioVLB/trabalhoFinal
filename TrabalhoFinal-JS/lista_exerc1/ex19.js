// A granja Frangotech possui um controle automatizado de cada frango da sua produção.
// No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são
// dois anéis para  indicar  o  tipo  de  alimento  que  ele  deve  consumir.
// Sabendo  que  o  anel  com  chip  custa R$4,00  e  o  anel  de  alimento  custa  R$3,50,
// faça  um  algoritmo  para  calcular  o  gasto  total  da granja para marcar todos os seus frangos.

var quantidadeFrango = 1000        // A cada um frango é gasto R$ 7.50 reais
var anelChip = 4.00
var anelAlimento = 3.50
var somaChipAlimento = ( anelChip + anelAlimento ) * quantidadeFrango

console.log(` A granja Frangotech terá um gasto de R$ ${somaChipAlimento} reais para marcar todos os seus frangos. `)