/*
2. Faça um programa para exibir a tabuada de 0 a 9.
*/

const readline = require(`readline-sync`)
var n = Number(readline.question(`Digite um numero de 0 a 9 e descubra a tabuada dele: `)) 

var x = 0
do{
    if(n >= 0 && n <= 9){
        console.log(`${n} x ${x} = ${n*x}`)
        x++
    }
    else{
        console.log(`A tabuada só vai do 0 ao 9.`)
        break
    }

}while(x <= 10)