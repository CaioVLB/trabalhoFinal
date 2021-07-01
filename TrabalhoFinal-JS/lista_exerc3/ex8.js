// 8. Um determinado material radioativo perde metade de sua massa a cada 50 segundos. Dada massa inicial, em gramas, 
// fazer um programa que calcule o tempo necessário para que essa massa se torne menor que 0,5 grama. O programa deve 
// escrever a massa inicial, a massa final e o tempo calculado em horas, minutos e segundos.

// fornecer uma maça inicial em gramas
// perde metade de sua mata a cada 50 segundos
// calcular o tempo necessário para que a massa se torne menor que 0,5 grama
// escrever a massa inicial, a massa final e o tempo calculado em horas, minutos e segundos.

const readline = require(`readline-sync`)
var massaI = Number(readline.question(`Qual e a massa (GRAMAS) do material radioativo? `))

var massaI2 = massaI
var tempo = 0
while(massaI > 0.5){
    massaI /= 2
    tempo += 50
}
var horas = (tempo/3600).toFixed(0)
var minutos = ((tempo - (horas * 3600)) / 60).toFixed(0)
var segundos = (tempo - (horas * 3600) - (minutos * 60))

console.log(`
A massa inical do material radioativo: ${massaI2}\n
A massa final do material radioativo: ${massaI}\n
O tempo gasto para que esse material fosse menor que 0,5 gramas foi: ${horas}:${minutos}:${segundos}
`)