// 17. Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e 
// que se encontram no conjunto dos números de 1 até 500.

var soma = 0
var cont = 0
for(var x = 1; x <= 500; x+=2){ 
    if(x%3==0){
        soma+=x
        cont+=1
        console.log(`-> ${x} impar multultiplo de 3.`)
    }
}
console.log("")
console.log(`A soma dos ${cont} números impares multiplos de 3 é ${soma}.`)