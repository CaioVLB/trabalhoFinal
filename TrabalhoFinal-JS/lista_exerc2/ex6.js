/*
Agora altere o algoritmo anterior de maneira que ele verifique os demais níveis de alerta.
Considere: 0-3 é "BAIXO", maior que 3 até 6 "MÉDIO", maior que 6 até 9 "ALTO", para os demais 
casos é considerado "GRAVE".
*/

const readlineSync = require(`readline-sync`)
function leia() {
    return readlineSync.question(`Digite um numero: `);
}
var nvlAlerta = (leia())

if ( nvlAlerta <= 3){
    console.log(`O nível de alerta de risco ${nvlAlerta} é BAIXO. `)

} else if ( nvlAlerta > 3 && nvlAlerta <= 6 ) {
    console.log(`O nível de alerta de risco ${nvlAlerta} é MÉDIO. `)

} else if ( nvlAlerta > 6 && nvlAlerta <= 9 ) {
    console.log(`O nível de alerta de risco ${nvlAlerta} é ALTO. `)

} else if ( nvlAlerta > 9 && nvlAlerta <= 10 ) {
    console.log(`O nível de alerta de risco ${nvlAlerta} é GRAVE. `)

} else {
    console.log("Error.")
}