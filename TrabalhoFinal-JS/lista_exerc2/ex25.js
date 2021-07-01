/*
25. Dados três valores X, Y e Z, verificar se eles podem ser os comprimentos dos lados de um triângulo e, 
se forem verificar se é um triângulo equilátero, isósceles ou escalenos. Se eles não formarem um triângulo, 
escrever a mensagem.Considere as seguintes propriedades: •O comprimento de cada lado em um triângulo é menor 
que a soma dos outros dois lados; •Equiláteros: tem os comprimentos dos três lados iguais; 
•Isósceles: tem os comprimentos de dois lados iguais; •escaleno: tem os comprimentos dos três lados diferentes.
*/

// O valor de cada lado de um triângulo deve ser menor que a soma dos os outros dois.

const readline = require(`readline-sync`)

console.log(`Digite valores para verificar se é um triângulo.`)

var la = Number(readline.question(`Digite um valor para o lado A: `));
var lb = Number(readline.question(`Digite um valor para o lado B: `));
var lc = Number(readline.question(`Digite um valor para o lado C: `));

if((la < (lb + lc)) && (lb < (la + lc)) && (lc < (la + lb))){
    if(la == lb && la == lc){
        console.log(`Os valores informados formam um triângulo e ele é chamado de equilátero.`)
    }else if(la == lb || la == lc || lb == lc){
        console.log(`Os valores informados formam um triângulo e ele é chamado de isósceles.`)
    }else if(la != lb && la != lc && lb != lc){
        console.log(`Os valores informados formam um triângulo e ele é chamado de escaleno.`)
    }
}else{
    console.log(`Os valores informados não formam um triângulo.`)
}