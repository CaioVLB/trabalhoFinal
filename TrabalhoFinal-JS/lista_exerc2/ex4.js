/*
Crie um algoritmo que, dado o nível de alerta de risco, imprima se ele for GRAVE. 
O nível de alerta é um número que varia de 0 a 10. O nível é considerado GRAVE quando 
ele é superior a 9.
*/

const readlineSync = require(`readline-sync`)
function leia() {
    return readlineSync.question(`Digite um numero: `);
}
var nvlAlerta = (leia())

if ( nvlAlerta <= 5){
    console.log(`O nível de alerta de risco ${nvlAlerta} é leve. `)

} else if ( nvlAlerta >= 6 && nvlAlerta <= 9 ) {
    console.log(`O nível de alerta de risco ${nvlAlerta} é moderado. `)

} else if ( nvlAlerta > 9 && nvlAlerta <= 10 ) {
    console.log(`O nível de alerta de risco ${nvlAlerta} é GRAVE. `)

} else {
    console.log("Esse número não se encaixa no nível de alerta de risco.")
}