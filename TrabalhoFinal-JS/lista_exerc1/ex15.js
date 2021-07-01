// Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar.
// Faça um  algoritmo  para  ler  o  valor  total  da  conta  e  imprimir  quanto  cada 
// um  deve  pagar,  mas faça com  que  Carlos  e  André  não  paguem  centavos.  
// Ex:  uma conta  de  R$101,53  resulta  em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe

var conta = 101.53
var contaCarlos = ( conta / 3 ) - 1
var contaAndre = ( conta / 3 ) - 1
var contaFelipe = ( conta / 3 ) + (2) - (0.31)

console.log( `Carlos pagará R$ ${contaCarlos.toFixed(0)},00 reais , André pagará R$ ${contaAndre.toFixed(0)},00 reais e o gente boa chamado Felipe pagará R$ ${contaFelipe.toFixed(2)} reais. ` )