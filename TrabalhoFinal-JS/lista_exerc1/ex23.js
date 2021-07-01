// Num  dia  de  sol,  você  deseja  medir  a  altura  de  um  prédio,  porém, a  trena  não  é 
// suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que 
// você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio. 

// fórmula =  a/b = a'/b' = razão trigonométrica

var alturaPessoa = 1.8   ;   var sombraPessoa = 2.0  ;  var sombraPredio = 10.0

var alturaPredio = (alturaPessoa * sombraPredio) / sombraPessoa
console.log(`O prédio possui ${alturaPredio} metros de altura.`) 