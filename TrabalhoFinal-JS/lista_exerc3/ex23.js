// 23. Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuadade N. 
// Mostre a tabuada na forma: 0 x N = 0, 1 x N= 1N, 2 x N = 2N, ..., 10 x N = 10N.
const readline = require(`readline-sync`)
var n = Number(readline.question(`Digite um numero de 1 a 10 e descubra a tabuada dele: `)) 

var x = 0
do{
    if(n >= 1 && n <= 10){
        console.log(`${n} x ${x} = ${n*x}`)
        x++
    }
    else{
        console.log(`A tabuada só vai do 1 ao 10.`)
        break
    }
}while(x <= 10)