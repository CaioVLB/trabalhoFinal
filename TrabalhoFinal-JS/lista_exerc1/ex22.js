// Pedrinho  tem  um  cofrinho  com  muitas  moedas,  e  deseja  saber  quantos  reais  conseguiu poupar.  
// Faça  um  algoritmo  para  ler  a  quantidade  de  cada  tipo  de  moeda,  e  imprimir  o  valor total 
// economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. 
// Não havendo moeda de um tipo, a quantidade respectiva é zero.

var moeda05  = 20 ;  var valor05  = ( moeda05 * 0.05 ) //quantidade de moeda multiplicado pelo seu respectivo valor
var moeda10 = 20  ;  var valor10 = ( moeda10 * 0.10 )
var moeda25 = 30  ;  var valor25 = ( moeda25 * 0.25 )
var moeda50 = 50  ;  var valor50 = ( moeda50 * 0.50 )
var moeda1  = 100 ;  var valor1 = ( moeda1 * 1 )

var moeda1c = 10  ;  var valorMoeda1c = ( moeda1c * 0.01 )

var economizado = ( valorMoeda1c + valor05 + valor10 + valor25 + valor50 + valor1 )

console.log(` Pedrinho possuí em seu cofrinho ${moeda1c} moedas de 1 centavo, ${moeda05} moedas de 5 centavos, ${moeda10} moedas de 10 centavos, ${moeda25} moedas de 25 centavos, ${moeda50} moedas de 50 centavos, ${moeda1} moedas de 1 real e o total economizado é R$ ${economizado}0 reais. `)