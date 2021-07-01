/*
22. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, 
conforme a tabela abaixo. Faça um algoritmo que leia o salário e o cargo de um funcionário e calcule o 
novo salário.Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento.
Mostre o salário antigo, o novo salário e a diferença.

Código    Cargo     Percentual
 101     Gerente      10%
 102     Engenheiro   20%
 103     Técnico      30%
*/

var readline = require(`readline-sync`)

var cargo = (readline.question(`Qual o cargo? `))
var salario = Number(readline.question(`Digite o salario do respectivo cargo: `))

var salGerente = ((salario * 0.1) + salario)   ;   var difGerente = (salGerente - salario)
var salEngen = ((salario * 0.2) + salario)     ;   var difEngen = (salEngen - salario)
var salTecn = ((salario * 0.3) + salario)      ;   var difTecn = (salTecn - salario)

var naoCargo = ((salario * 0.4) + salario)     ;   var difNcargo = (naoCargo - salario)

if(cargo == "Gerente" || cargo == "gerente"){
    console.log(`O salário antigo era R$ ${salario} reais, após o aumento o salário foi para R$ ${salGerente} e a difença entre o salário antigo e atual é de R$ ${difGerente} reais.`)

} else if(cargo == "Engenheiro" || cargo == "engenheiro"){
    console.log(`O salário antigo era de R$ ${salario} reais, após o aumento o salário foi para R$ ${salEngen} e a difença entre o salário antigo e atual é de R$ ${difEngen} reais.`)

} else if(cargo == "Tecnico" || cargo == "tecnico" ){
    console.log(`O salário antigo era de R$ ${salario} reais, após o aumento o salário foi para R$ ${salTecn} e a difença entre o salário antigo e atual é de R$ ${difTecn} reais.`)

} else {
    console.log(`O salário antigo era R$ ${salario} reais, após o aumento o salário foi para R$ ${naoCargo} reais e a diferença entre o salário antigo e atual é de R$ ${difNcargo} reais. `)
}