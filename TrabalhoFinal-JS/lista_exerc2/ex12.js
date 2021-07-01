/*
Crie um algoritmo que seja capaz de descobrir,por meio de perguntas lógicas(verdadeiro ou falso) 
sobre características físicas,um animal que o usuário tenha em mente. Considere os animais: pato, 
águia, galinha,avestruz, pinguim, morcego, ornitorrinco,leão, gato, onça pintada, baleia, tubarão, 
lambari, enguia e arraia.
*/
/*
é uma ave? OK
cacareja? (galinha) OK
sabe nadar e tem penugem?(pato) OK
voa alto e possui um sistema visual apurado?(aguia) OK
vive na neve?(pinguin) OK
possui pernas e pescoço longos?(avestruz) OK

é um mamifero? OK
ele voa? (morcego) OK
ruge?(leão) OK
mia?(gato) OK
tem pintas?(onça) OK
vive no mar?(baleia) OK
é um animal de hábito noturno e bota ovos ?(ornitorrinco) OK

vive na agua? OK
é grande e tem barbatanas?(tubarão) ok
da choque?(enguia) OK
tem ferrão?(arraia) OK
é pequeno?(lambari) OK
*/

console.log("Vou tentar advinhar um animal que você esteja pensando.")
console.log(`Digite SIM ou NÃO para as perguntas. `)
const readline = require(`readline-sync`)

var pergMamifero = (readline.question(`O animal que voce esta pensando e um mamifero? `))
if(pergMamifero == "S" || pergMamifero == "Sim" || pergMamifero == "SIM" || pergMamifero == "sim"){
    
    var pergVoa = (readline.question(`Ele voa? `))
    if(pergVoa == "S" || pergVoa == "Sim" || pergVoa == "SIM" || pergVoa == "sim"){
        console.log(`Então o animal é um morcego.`) // O morcego é o único mamífero que voa.
        
    }else{
        var pergLeao = (readline.question(`Ele ruge? `))
        if(pergLeao == "S" || pergLeao == "Sim" || pergLeao == "SIM" || pergLeao == "sim"){
            console.log(`Então o animal é um leão.`)

        }else{
            var pergGato = (readline.question(`Ele mia? `))
            if(pergGato == "S" || pergGato == "Sim" || pergGato == "SIM" || pergGato == "sim"){
                console.log(`Então o animal é um gato.`)

            }else{
                var pergOnca = (readline.question(`Ele tem pintas espalhadas pelo corpo? `))
                if(pergOnca == "S" || pergOnca == "Sim" || pergOnca == "SIM" || pergOnca == "sim"){
                    console.log(`Então o animal é uma onça.`)

                }else{
                    var pergBaleia = (readline.question(`Ele vive no mar? `))
                    if(pergBaleia == "S" || pergBaleia == "Sim" || pergBaleia == "SIM" || pergBaleia == "sim"){
                        console.log(`Então o animal é uma baleia.`)

                    }else{
                        var pergOrni = (readline.question(`Ele e um animal de habito noturno e bota ovos? `))
                        if(pergOrni == "S" || pergOrni == "Sim" || pergOrni == "SIM" || pergOrni == "sim"){
                            console.log(`Então o animal é um ornitorrinco.`)

                        }else{
                            console.log(`Então não sei qual animal é.`)
                        }
                    }
                }
            }
            
        }
    }
    
}else{
    var pergAve = (readline.question(`O animal que voce esta pensando e uma ave? `))
    if(pergAve == "S" || pergAve == "Sim" || pergAve == "SIM" || pergAve == "sim"){

        var pergGal = (readline.question(`Ele cacareja? `))
        if(pergGal == "S" || pergGal == "Sim" || pergGal == "SIM" || pergGal == "sim"){
            console.log(`Então o animal é uma galinha.`)

        }else{
            var pergPato = (readline.question(`Ele sabe nadar e tem penugem? `))
            if(pergPato == "S" || pergPato == "Sim" || pergPato == "SIM" || pergPato == "sim"){
                console.log(`Então o animal é um pato.`)

            }else{
                var pergAguia = (readline.question(`Ele voa alto e possui um sistema visual apurado? `))
                if(pergAguia == "S" || pergAguia == "Sim" || pergAguia == "SIM" || pergAguia == "sim"){
                    console.log(`Então o animal é uma águia.`)

                }else{
                    var pergPing = (readline.question(`Ele vive na neve? `))
                    if(pergPing == "S" || pergPing == "Sim" || pergPing == "SIM" || pergPing == "sim"){
                        console.log(`Então o animal é um pinguin.`)

                    }else{
                        var pergAvest = (readline.question(`Ele possui pernas e pescoco longos? `))
                        if(pergAvest == "S" || pergAvest == "Sim" || pergAvest == "SIM" || pergAvest == "sim"){
                            console.log(`Então o animal é um avestruz.`)

                        }else{
                            console.log(`Então não sei qual animal é.`)
                        }
                    }
                }
            }
        }
    }else{
        var pergVive = (readline.question(`O animal que voce esta pensando vive na agua? `))
        if(pergVive == "S" || pergVive == "Sim" || pergVive == "SIM" || pergVive == "sim"){

            var pergTubar = (readline.question(`Ele e grande e tem barbatanas? `))
            if(pergTubar == "S" || pergTubar == "Sim" || pergTubar == "SIM" || pergTubar == "sim"){
                console.log(`Então o animal é um tubarão.`)

            }else{
                var pergEng = (readline.question(`Ele da choque? `))
                if(pergEng == "S" || pergEng == "Sim" || pergEng == "SIM" || pergEng == "sim"){
                    console.log(`Então o animal é uma enguia.`)

                }else{
                    var pergArr = (readline.question(`Ele tem ferrao? `))
                    if(pergArr == "S" || pergArr == "Sim" || pergArr == "SIM" || pergArr == "sim"){
                        console.log(`Então o animal é uma arraia.`)

                    }else{
                        var pergLamb = (readline.question(`Ele e pequeno? `))
                        if(pergLamb == "S" || pergLamb == "Sim" || pergLamb == "SIM" || pergLamb == "sim"){
                            console.log(`Então o animal é um lambari.`) // peixe bem pequeno

                        }else{
                            console.log(`Então não sei qual animal é.`)
                        }
                    }
                }
            }
        }else{
            console.log(`Então não sei qual animal é. Perdoe me!`)
        }
    }
}
console.log(`Fim do programa!`)