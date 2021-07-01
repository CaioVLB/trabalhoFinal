const readline = require('readline-sync')
function banner (){
    console.log(`
    ==================================
             TRABALHO FINAL
    ==================================
    Aluno: Caio Vitor Lima Brito
    Curso: Algoritmos e Linguagem de Programação (ADS)
    Período: 1º

    Existem três listas de exercícios, escolha a que você deseja consultar:
    Lista: 1
    Lista: 2
    Lista: 3

    Caso deseje finalizar o programa, basta digitar "0".
    `)
}

function mostraListaExercicio (qntdExercicio){
    for(var x = 1; x <= qntdExercicio; x++){
    console.log(`Exercício ${x}`);
    }
}

function receberValor(msg){
    return Number.parseInt(readline.question(msg))
}

function validarEntrada(numeroLista){
    switch(numeroLista){
        case 0:
        process.exit();
        break;

        case 1: 
        mostraListaExercicio(40);
        let subArrayObject1 = criarObjetoLista(40, 1);
        let respostaUser1 = receberValor('Escolha algum exercicio da lista 1: ');
        executarExercicio(respostaUser1, subArrayObject1, 40);
        break;

        case 2:
        mostraListaExercicio(25);
        let subArrayObject2 = criarObjetoLista(25, 2);
        let respostaUser2 = receberValor('Escolha algum exercicio da lista 2: ');
        executarExercicio(respostaUser2, subArrayObject2, 25);
        break;

        case 3:
        mostraListaExercicio(26);
        let subArrayObject3 = criarObjetoLista(26, 3);
        let respostaUser3 = receberValor('Escolha algum exercicio da lista 3: ');
        executarExercicio(respostaUser3, subArrayObject3, 26);
        break;

        default:
            console.log(`Lista de exercício inexistente.`)
        break;
    }
    setTimeout(()=> {main()}, 3000);
}

function criarObjetoLista (qntdExercicio, nLista ) {
    var repositorioExercicio = [];
    for(var x = 0; x <= qntdExercicio; x++){
        repositorioExercicio.push({
            caminho: `C:\\Users\\CaioVTLima\\OneDrive\\Documentos\\Faculdade-IFRO\\JavaScript-IFRO\\TrabalhoFinal-JS\\lista_exerc${nLista}\\ex${x}.js`
        });
    }
    return repositorioExercicio;
}

function executarExercicio (n, array, qntdExercicio) {
    
    if(n <= qntdExercicio){
        require(`${array[n].caminho}`);
    }else{
        console.log(`Número do exercício inexistente.`)
    }
}

function main(){
    banner();
    let nLista = receberValor('Escolha uma lista de exercicio: ');
    validarEntrada(nLista); 
}
main();
