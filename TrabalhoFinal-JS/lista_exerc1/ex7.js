//Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início
//do ano. Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30
//dias. 

//informar um mês
//informar um dia do mês
//informar que um mes possui 30 dias
//realizar uma subtração entre a quantidade de dias que possui um mês e o dia escolhido
//multiplicar o mês escolhido e a quantidade de dias de um mês e logo após subtratir pelos dias restantes de um mês
//mostrar a quantidade de dias desde de o inicio do ano até o mês escolhido

var mes = 7                   //Mês escolhido
var dia = 5                   //Dia escolhido
var diasMes = 30              //Um mês possui 30 dias
var diasRestante = ( diasMes - dia )  //subtração entre a quantidade de dias de um mês e o dia escolhido para encontrar quantos dias restaram para completar um mês
var quantidadeDias = ( ( mes * diasMes ) - diasRestante)

console.log(`A quantidade de dias desde o início do ano é: ${quantidadeDias} dias.`)