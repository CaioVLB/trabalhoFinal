//Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média
//ponderada (as notas tem pesos respectivos de 1, 2 e 3). 

//definir a primeira nota
//definir a segunda nota
//definir a terceira nota
//demonstrar o primeiro, segundo e terceiro peso das notas
//realizar uma soma entre os pesos
//multiplicar cada nota com os seus respectivos pesos e dividir pela soma dos pesos
//demonstrar a média ponderada do aluno na disciplina

var nota1 = 9 ; var peso1 = 1
var nota2 = 8 ; var peso2 = 2
var nota3 = 10 ; var peso3 = 3

var somaPeso = ( peso1 + peso2 + peso3 )
var resultadoMediaP = ( (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) ) / somaPeso

console.log(` A média ponderada do aluno William em matemática é ${resultadoMediaP.toFixed(2)} `)