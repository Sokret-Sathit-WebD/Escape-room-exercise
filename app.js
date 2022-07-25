// const readline = require("readline-sync");
// const name = readline.question("What is your name? ");

const readlineSync = require("readline-sync")
const name = readlineSync.question("You are stuck in a room what do you want to do? ");

const a = ( readlineSync.question(" 1) Put hand in hole "));
const b = ( readlineSync.question(" 2) Find the key "));


const choice = readlineSync.question(": 1, 2 Choose your answer:");
    if(choice.toLowerCase() == '1') {
    console.log( "You are dead ☠️ " );

    } else if(choice.toLowerCase() == '2') {
    console.log("You found the key, you are free!!!");
    
    } else {
    console.log("Stuck in room");
    
    };

