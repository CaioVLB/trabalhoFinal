/*
16. Você viajou para os Estados Unidos e descobriu que lá a unidade de medida de temperatura é diferente da 
do Brasil. Para não ter que acessar um serviço na internet a todo o momento, nem fazer os cálculos manualmente, 
faça um algoritmo que converte a temperatura, dada uma unidade de medida e uma temperatura.Ou seja, se a data 
for informada em Celsius o algoritmo deve fornecer a temperaturaem Fahrenheit, já se a temperatura for fornecida 
em Fahrenheit, o resultado deve ser em graus Celsius.
*/

//fahrenheit para celsius X°F - 32 / 1.8 = X°C   //Celsius para Fahrenheit X°C * 1.8 + 32
//formula = ( 28 * (9 / 5) + 32 )

var readline = require(`readline-sync`)

var tempMedida = Number(readline.question(`Digite uma temperatura: `) )
var medida = (readline.question(`Digite "F" para Fahrenheit ou "C" para Celsius: `))

var tempfahrenheit = (tempMedida - 32) / 1.8 //Esse cálculo resultará em uma temperatura em Celsius
var tempCelsius = (tempMedida * 1.8) + 32   //Esse cálculo resultará em uma temperatura em Fahrenheit

if (medida == "C" || medida == "c"){
    console.log(`A temperatura em Fahrenheit é: ${tempCelsius.toFixed(1)}°F.`)

}else if(medida == "F" || medida == "f") {
    console.log(`A temperatura em Celsius é: ${tempfahrenheit.toFixed(0)}°C.`)

}else{
    console.log("Coloque somente C ou F!")
}