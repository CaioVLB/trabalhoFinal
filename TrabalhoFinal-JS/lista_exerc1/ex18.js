// A  empresa  Hipotheticus  paga  R$10,00  por  hora  normal  trabalhada,  e  R$15,00  por  hora extra.
// Faça  um  algoritmo  para  calcular  e  imprimir  o  salário  bruto  e  o  salário  líquido  de  um 
// determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 
// 10% de impostos

// 04 semanas de trabalho por mês => 20 dias de trablaho no mês => 5 vezes na semana //

var diasTrabalho = 20
var horasTrabalho = 8   ; var horaValor = 10.00   //08 horas de trabalho diário => 5 vezes na semana   
var horasExtra = 2      ; var extraValor = 15.00     //02 horas extra uma vez por semana

var valorTrabalho = ( (horaValor * horasTrabalho) * diasTrabalho ) // Quanto ganhar sem as horas extras

var valorExtra = ( (extraValor *horasExtra) * diasTrabalho ) // Quanto ganha de horas extra

var salarioBruto = ( valorTrabalho + valorExtra )

var salarioLiquido = salarioBruto - ( salarioBruto * 0.1 )  // 10% de imposto => 0.1

console.log(` O salário BRUTO de um funcionário da empresa Hipotheticus é de: R$ ${salarioBruto} reais e o seu salário LÍQUIDO é: R$ ${salarioLiquido} reais. `)