// A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de 
// queijo,  uma  fatia  de  presunto  e  uma  rodela  de  hambúrguer.  Sabendo  que  cada  fatia
// de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça 
// um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe
// as quantidades (em quilos) de queijo, presunto e carne necessários para compra.

//1000 gramas = 1 quilograma

var quantidadeSanduiche = 50       //50 sanduíches
var queijo = ( 0.05 * 2 )         //50 gramas cada fatia de queijo x 50 sanduíches //50 gramas = 0.05 quilo
var presunto = 0.05              //50 gramas de presunto x 50 sanduíches          //50 gramas = 0.05 quilo
var hamburguer = 0.1            //100 gramas de hambúrguer x 50 sanduíches       //100 gramas = 0.1 quilo

var resultadoQueijo = ( queijo * quantidadeSanduiche )
var resultadoPresunto = ( presunto * quantidadeSanduiche )
var resultadoHamburguer = ( hamburguer * quantidadeSanduiche )

console.log(` A quantidade informada pela máquina em quilos é: ${resultadoQueijo} Kg de queijo, ${resultadoPresunto} Kg de presunto e ${resultadoHamburguer} Kg de hambúrguer. `)