//O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um
//algoritmo que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar.
//Assuma que a balança já desconte o peso do prato

//sabe-se que o restaurante cobra R$ 12,00 por cada quilo de refeição
//definir quantos quilogramas por cada alimento o cliente pôs em seu prato
//definir quantos quilogramas deu o prato montado do cliente
//definir qual o valor a ser pago pelo cliente

var arroz = 0.6        //0.6 quilogramas de arroz = 600 gramas de arroz
var feijao = 0.4       //0.4 quilogramas de feijão = 400 gramas de feijão
var macarrao = 0.4     //0.4 quilogramas de macarrão = 400 gramas de macarrão
var salada = 0.2       // 0.2 quilogramas de salada = 200 gramas de salada
var fileFrango = 0.4   // 0.4 quilogramas de file de frango = 400 gramas de file de frango

var quiloRefeicao = 12.00 //R$ 12,00 cada 1 quilograma de refeição

var quilosPratoCliente = ( arroz + feijao + macarrao + salada + fileFrango )
var clientePagar = ( (quilosPratoCliente) * (quiloRefeicao) )

console.log(`O prato do cliente possui ${quilosPratoCliente} quilogramas e o valor a ser pago é R$ ${clientePagar} reais.`)
