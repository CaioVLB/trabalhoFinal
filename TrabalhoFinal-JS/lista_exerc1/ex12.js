//Faça  um  algoritmo  para  ler  o  salário  de  um  funcionário  e  aumentá-Io  em  15%. 
//Após  o aumento,  desconte 8%  de  impostos.  Imprima  o  salário  inicial,  o  salário  com 
//o  aumento  e  o salário final.

//

var salarioFuncionario = 3000
var aumentoQuinze = ( 15 / 100 )
var aumentoSalario = (salarioFuncionario * aumentoQuinze)
var novoSalario = ( salarioFuncionario + aumentoSalario )

var descontoOito = ( 8 / 100 )
var descontoSalario = ( novoSalario * descontoOito )
var salarioAtual = ( novoSalario - descontoSalario )

console.log(` O salário do funcionário era R$ ${salarioFuncionario} reais, ocorreu um aumento e o seu salario subiu para R$ ${novoSalario} reais, mas ao passar um tempo ocorreu uma redução salarial e o seu novo salário é de R$ ${salarioAtual} reais. `)

