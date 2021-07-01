
//A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de
//broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono
//quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar
//numa conta de poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos
//para o dono. Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de
//broas, e depois calcular os dados solicitados. 


//quantidade de pães franceses vendidos foram 50
//quantidade de broas vendidas foram 25
//cada pão francês custa R$ 0,12
//cada broa custa R$ 1,50
//calcular o valor arrecado com os pães franceses
//calcular o valor arrecado com as broas
//somar o valor arrecadado com a venda de pães franceses e broas juntos (pães + broas) 
//do valor arrecadado deve guardar 10% em um conta poupança
//encontrar quanto é 10% do valor arrecado

var quantidadePaes = 50
var quantidadeBroas = 25
var valorPao = 0.12
var valorBroa = 1.50
var arrecadacaoPaes = (quantidadePaes * valorPao)
var arrecadacaoBroas = (quantidadeBroas * valorBroa)
var paesEbroas = (arrecadacaoPaes + arrecadacaoBroas) //valor arrecadado de pães e broas
var resultadoPoupanca = 0.1 //10% é a mesma coisa que 0,1

console.log(`o valor arrecadado foi R$ ${paesEbroas}`)

console.log (`o valor a ser guardado na poupança é ${(paesEbroas * resultadoPoupanca).toFixed(2)} `)






