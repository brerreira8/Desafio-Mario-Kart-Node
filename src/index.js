//Criando objetos os "Competidores" com constantes

const player1 = {
    nome : "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
};

const player2 = {
    nome : "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
};

const player3 = {
    nome : "Peach",
    velocidade : 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0
};

const player4 = {
    nome : "Luigi",
    velocidade : 4,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
};
const player5 = {
    nome : "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0
};

const player6 = {
    nome : "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
};

// Função para simular o lançamento de um dado de 6 lados

// Funções assíncronas funcionam quando são chamadas, e não automaticamente

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
        default:
            result = "CONFRONTO";
    }

    return result
}

//Função para rolar os dados

async function logRollResult(characterName, block, diceResult, attribute) 
{
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function PlayRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round ++ ){
        console.log(`🏁 Rodada ${round}`)

    //Sorteando bloco   

    let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

    // rolar os dados

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //Test de habilidade

    let totalTesSkill1 = 0;
    let totalTestSkill2 = 0;

    //Condicional para reta
    if(block === "RETA"){
        totalTesSkill1 = diceResult1 + character1.velocidade;
        totalTestSkill2 = diceResult2 + character2.velocidade;
        
        await logRollResult(
            character1.nome,
            "velocidade", diceResult1, 
            character1.velocidade);
              
        await logRollResult(
            character2.nome,
            "velocidade", diceResult2, 
            character2.velocidade);  
    };

    //Condicional para curva
    if(block === "CURVA"){
        totalTesSkill1 = diceResult1 + character1.manobrabilidade;
        totalTestSkill2 = diceResult2 + character2.manobrabilidade;

        await logRollResult(
            character1.nome,
            "manobrabilidade", diceResult1, 
            character1.manobrabilidade);  

        await logRollResult(
            character2.nome,
            "manobrabilidade", diceResult2, 
            character2.manobrabilidade);      

    };

    //Condicional para confronto
    if(block === "CONFRONTO"){
        let powerResult1 = diceResult1 + character1.poder;
        let powerResult2 = diceResult2 + character2.poder;

        console.log(`${character1.nome} confrontou com ${character2.nome} 🥊`);
        
        await logRollResult(
            character1.nome,
            "poder", 
            diceResult1, 
            character1.poder); 

        await logRollResult(
            character2.nome,
            "poder",
            diceResult2, 
            character2.poder);  

            

            //If ternários
            character2.pontos -= powerResult2 > powerResult2 &&  character2.pontos > 0 ? 1 :0;
            
            character1.pontos -= powerResult2 > powerResult1 && character1.pontos > 0 ? 1 :0;
        
            console.log(powerResult2 === powerResult1 ? "Confronto empatado !" : "");    
    }

    //Verificando o vencedor 

    if(totalTesSkill1 > totalTestSkill2){
        console.log(`${character1.nome} marcou um ponto!`);
        character1.pontos++;
        }else if(totalTestSkill2 > totalTesSkill1){
            console.log(`${character2.nome} marcou um ponto!`);
            character2.pontos++;
        }

        console.log("================================================")

    }
}


async function main() {
    console.log(`Corrida entre ${player1.nome} e ${player2.nome} está começando...!!\n`
);

    await PlayRaceEngine(player1, player2);

}main();

