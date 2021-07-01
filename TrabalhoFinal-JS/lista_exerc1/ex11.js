//Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um algoritmo 
//para  converter  este  tempo  em  anos,  meses  e  dias.  Assuma  que  cada  mês  possui sempre 30 dias.

var DiasSem = 730       //Dias sem acidentes
var umAno = 365          //Um ano tem 365 dias
        
var resultado = ( DiasSem / umAno)

console.log(` A fábrica está sem acidentes de trabalho a exatamente ${resultado} anos, 0 meses e 0 dias.`)