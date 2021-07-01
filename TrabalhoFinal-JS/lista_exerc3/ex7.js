//7. Escreva um programa que gera números entre 1000 e 1999 e mostra aqueles que divididos por 11 dão resto 5.

var divisor = 11
for(var x = 1000; x <= 1999; x++){
    
    if(x%11==5){
        console.log(`${x}/${divisor} tem resto 5.`)
    }
}