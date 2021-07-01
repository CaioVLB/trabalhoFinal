//Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida 
//respectivamente  por  10,  12  e  15  reais.  Construa  um  algoritmo  em  que  o  usuário forneça 
//a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto 
//será o valor arrecadado. 

//Informar os valores referentes as camisetas de tamanho Pequena (P), Média (M) e Grande (G)
//Informar a quantidade de camisetas vendidas de cada tamanho(P, M e G)
//Realizar a multiplicação entre o valor de cada camiseta e as suas respectivas quantidades vendidas
//Informar quantos reais foram arrecadados com as vendas das camisetas

var camisetaPequena = 10 ;  var quantidadePequena = 10
var camisetaMedia = 12   ;  var quantidadeMedia = 10
var camisetaGrande = 15  ;  var quantidadeGrande = 10

var arrecadacaoCamiseta = ( (camisetaPequena * quantidadePequena) + (camisetaMedia * quantidadeMedia) + (camisetaGrande * quantidadeGrande) )

console.log(` O valor arrecadado com a venda das camisas de tamanho P, M e G é: R$ ${arrecadacaoCamiseta} reais.`)