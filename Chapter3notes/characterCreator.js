const readline = require('readline-sync');

let diceRolled = [];

function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount,list){
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll)
    }
}

function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum += list{i}
    }
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4,list);
    return sum(list);
}

function createChar(list){
    character.name = readline.question("Enter character name:");
    console.log("Rolling STR");
    character.strength = rollStat(diceRolled);
    
}
