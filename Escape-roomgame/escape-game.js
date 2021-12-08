var readlineSync = require("readline-sync");

console.log("------------------");

const playerName = readlineSync.question("What is your name?");
console.log("------------------");
const welcome = `Welcome ${playerName}  Can you escape!`;
console.log(welcome);
console.log("------------------");

let ifAlive = true;
let hasKey = false;

while (ifAlive == true) {
    const menuId = readlineSync.keyIn(
        `1: Put your hand in the hole \n2: Find the key \n3: Open the door`,
        { limit: "$<1-3>" }
    );
    console.log("------------------");
    if (menuId == 1) {
        console.log(`${playerName}  YOU DIED!`);
        ifAlive = false;
    } else if (menuId == 2 && hasKey == true) {
        console.log(`${playerName}, You have the key already try door maybe?`);
    } else if (menuId == 2 && hasKey == false) {
        console.log(`${playerName}, you have the key, try the door!`);
        hasKey = true;
    } else if (menuId == 3 && hasKey == false) {
        console.log(`Need the key to open door!.`);
    } else if (menuId == 3 && hasKey == true) {
        console.log(`Door Opens, ${playerName} runs thru fast!`);
        ifAlive = false;
    }
}
