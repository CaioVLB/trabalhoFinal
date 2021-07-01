/*
Crie um algoritmo que, dados o tamanho de três lados informados pelo usuário, verifique se: 
(1) é um triângulo isósceles, (2) é equilátero,(3) é escaleno ou (4) não é um triângulo.
*/

const readline = require(`readline-sync`)

console.log(`Digite 3 valores para verificar se é um triângulo equilátero, isósceles, escaleno ou se não é um triângulo.`)

var la = Number(readline.question(`Digite um valor para o lado A: `));
var lb = Number(readline.question(`Digite um valor para o lado B: `));
var lc = Number(readline.question(`Digite um valor para o lado C: `));

if((la < (lb + lc)) && (lb < (la + lc)) && (lc < (la + lb))){
    if(la == lb && la == lc){
        console.log(`Os valores informados formam um triângulo equilátero.`)
    }   else if(la == lb || la == lc || lb == lc){
         console.log(`Os valores informados formam um triângulo isósceles.`)
    }   else if(la != lb && la != lc && lb != lc){
         console.log(`Os valores informados formam um triângulo escaleno.`)
    }
}else{
    console.log(`Não é um triângulo.`)
}