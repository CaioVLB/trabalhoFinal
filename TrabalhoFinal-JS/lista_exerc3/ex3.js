/*
3. Faça um programa para ler um número real e exibir uma tabela em que o número apareça multiplicado até 200, 
sendo 10 em cada linha. Esta tabela é útil para deixar afixada em lojas de  Xerox, por exemplo.
Exemplo: 
Valor do Xerox: R$ 0,06
1 = 0,06 2= 0,12 3= 0,18 .....................................................10=0,60
11 = 0,66 ....
....
191=11,46 ... 200=12,00
*/
const readline = require(`readline-sync`)
var numerReal = Number(readline.question(`Digite um numero: `))

for(var x = 1; x <= 200; x++){
    console.log(`${x} = R$ ${(numerReal * x).toFixed(2)}`)
}