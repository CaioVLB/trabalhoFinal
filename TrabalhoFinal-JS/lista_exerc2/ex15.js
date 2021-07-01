/*
15. Escreva um algoritmo para cadastro de dados básicos de alunos. O usuário deve informar o número 
da matrícula (cinco dígitos), nome completo do aluno, gênero (o usuário deve informar “M” ou “F”), 
curso (o usuário deve informar “BSI”, “EE”, “EM”, “EC” ou “AQ”) e coeficiente de rendimento 
(dever ser maior ou igual a zero e menor ou igual a 10). Como resultado o sistema deve imprimir a 
matrícula, o nome do aluno, gênero (deve imprimir“Masculino” ou “Feminino”), 
curso (“Bacharelado em Sistemas de Informação” para “BSI”,“Engenharia Elétrica” para “EE”, 
“Engenharia Mecânica”para “EM”, “Engenharia Civil” para“EC” e “Arquitetura” para “AQ”), o coeficiente 
de rendimento, seguido por “Excelente” se o coeficiente for [9, 10], “Bom” se entre [7, 9), 
“Regular”se entre [5, 7), “Necessita melhoras” se entre [3, 5) e “Preocupante” se entre [0, 3).
Note a existência de intervalos fechados e semifechados para os coeficientes.
*/

const readline = require(`readline-sync`)

let matricula = Number(readline.question(`Qual o numero da matricula? `)) //cinco digitos
let name = (readline.question(`Qual o nome do aluno(a)? `))
let genero = (readline.question(`Qual o genero do aluno? `))
let curso = (readline.question(`Qual o curso do aluno? `)) // “BSI”, “EE”, “EM”, “EC” ou “AQ”
let rend =  Number(readline.question(`Qual foi o coeficiente de rendimento do aluno? `)) // >= 0 && <= 10

console.log(`==============================`)
console.log(" DADOS BÁSICOS DO(A) ALUNO(A)")
console.log(`==============================`)

if(matricula >= 10000){
    if(genero == "Masculino" || genero == "M" || genero == "masculino" || genero == "Feminino" || genero == "F" || genero == "feminino"){
        if(rend >= 0 && rend <= 10){
            console.log(`Número da matrícula: ${matricula};`)
            console.log(`Nome: ${name};`)
            console.log(`Gênero: ${genero};`)
            console.log(`Curso: ${curso};`)
            
        }if(rend > 9 && rend <=10){
            console.log(`Coeficiente de rendimento: ${rend}, EXCELENTE!`)
        }else if(rend > 7 && rend <= 9){
            console.log(`Coeficiente de rendimento: ${rend}, BOM!`)
        }else if(rend > 5 && rend <= 7){
            console.log(`Coeficiente de rendimento: ${rend}, REGULAR!`)
        }else if(rend > 3 && rend <= 5){
            console.log(`Coeficiente de rendimento: ${rend}, NECESSITA MELHORAS!`)
        }else if(rend >= 0 && rend <= 3){
            console.log(`Coeficiente de rendimento: ${rend}, PREOCUPANTE!`)
        }else{
            console.log("O coeficiente de rendimento vai de 0 a 10.")
        }
    }

}else{
    console.log("Error! verifique o código da matrícula.")
}