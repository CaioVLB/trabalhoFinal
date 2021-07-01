/*
 Agora altere o algoritmo anterior de maneira que ele verifique também se o nível informado 
 está entre 0 e 10. Caso contrário uma mensagemde erro deve ser apresenta.
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
    console.log("Error.")
}