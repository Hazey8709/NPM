var readlineSync = require("readline-sync");

console.log("ZombieX");
console.log("---  ---");
let user = readlineSync.question("What will your username be? ");
console.log("---  ---");
console.log(` ${user} will you survive the game?`);
console.log("-- Decision's --");

let isAlive = true;
let inv = [];
let userHP = 100;

let mainMenu = () => {
    let walk = readlineSync.keyIn(`w: Walk Forward: \nP: Stats: `);
    if (walk == `w`) {
        walkRandom();
    } else if (walk == `p`) {
        console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
    }
};

let walkRandom = () => {
    let x = Math.random();
    if (x < 0.3) {
        spawnEnemy();
    } else {
        console.log(`Close Call! You was almost attacked!.`);
        console.log("-----------");
    }
};

let spawnEnemy = () => {
    let x = Math.random();
    if (x < 0.3) {
        spawnZombieDog();
    } else if (x < 0.6) {
        spawnTwistedZombie();
    } else if (x > 0.6) {
        spawnHulkingZombie();
    }
};
let spawnZombieDog = () => {
    console.log(`Flesh eating dog appeared!`);
    console.log("-----------");
    let x = 40;
    while (isAlive == true) {
        let zombieAtk = Math.floor(Math.random() * 5 + 1);
        let pAtk = Math.floor(Math.random() * 15 + 1);
        if (userHP <= 0) {
            console.log(`GAME OVER! ${user} DIED`);
            isAlive = false;
        } else if (x <= 0) {
            console.log(
                `You have defeated the Zombie Dog and have been awarded a Dog Tooth Trophy!`
            );
            console.log("--- Decision's ---");
            f = `Dog Tooth Trophy`;
            inv.push(f);
            mainMenu();
            break;
        } else if (userHP != 0 && x != 0) {
            let choice = readlineSync.keyIn(
                `1: Attack \n2: Run \np: View Stats`
            );
            if (choice == 1) {
                x -= pAtk;
                console.log(`Zombie Dog took ${pAtk} damage! HP is now: ` + x);
                userHP -= zombieAtk;
                console.log("----------");
                console.log(
                    `${user} took ${zombieAtk} DAMAGE! HP is now: ` + userHP
                );
                console.log("----------");
            } else if (choice == 2) {
                let runChance = Math.random();
                if (runChance > 0.5) {
                    console.log(`You got away safely.`);
                    mainMenu();
                    break;
                } else {
                    console.log(
                        `You turn to run but the Zombie Dog lunges at your back!`
                    );
                }
            } else if (choice == `p`) {
                console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
            }
        } else {
            console.log(`Bad Luck`);
        }
    }
};

let spawnTwistedZombie = () => {
    console.log(`Twisted Zombie appeared and ready to attack!`);
    console.log("----------");
    let x = 60;
    while (isAlive == true) {
        let zombieAtk = Math.floor(Math.random() * 8 + 1);
        let pAtk = Math.floor(Math.random() * 15 + 1);
        if (userHP <= 0) {
            console.log(`GAME OVER! ${user} DIED!`);
            isAlive = false;
        } else if (x <= 0) {
            console.log(`Zombie Defeated awarded Its's Head!`);
            console.log("----------");
            f = `It's Head`;
            inv.push(f);
            mainMenu();
            break;
        } else if (userHP != 0 && x != 0) {
            let choice = readlineSync.keyIn(
                `1: Attack \n2: Run \np: View Stats`
            );
            if (choice == 1) {
                x -= pAtk;
                console.log(
                    `Twisted Zombie took ${pAtk} damage! HP is now: ` + x
                );
                userHP -= zombieAtk;
                console.log(
                    `${user} took ${zombieAtk} damage! HP is now: ` + userHP
                );
                console.log("----------");
            } else if (choice == 2) {
                let runChance = Math.random();
                if (runChance > 0.5) {
                    console.log(`You got away safely.`);
                    mainMenu();
                    break;
                } else {
                    console.log(
                        `As you try to flee the Twisted Zombie grabs you with all 4 arms!`
                    );
                }
            } else if (choice == `p`) {
                console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
            }
        } else {
            console.log(`Dang`);
        }
    }
};

let spawnHulkingZombie = () => {
    console.log(`A HULKING ZOMBIE HAS BEGUN TO CHARGE AT YOU!!`);
    console.log("---------");
    let x = 80;
    while (isAlive == true) {
        let zombieAtk = Math.floor(Math.random() * 10 + 1);
        let pAtk = Math.floor(Math.random() * 15 + 1);
        if (userHP <= 0) {
            console.log(`${user}  DIED, GAME OVER!`);
            isAlive = false;
        } else if (x <= 0) {
            console.log(
                `You have defeated the HULKING ZOMBIE and have been awarded a Healing Orb (+5 HP).`
            );
            console.log("----------");
            userHP += 5;
            mainMenu();
            break;
        } else if (userHP != 0 && x != 0) {
            let choice = readlineSync.keyIn(
                `1: Attack \n2: Run \np: View Stats`
            );
            if (choice == 1) {
                x -= pAtk;
                console.log(
                    `Hulking Zombie took ${pAtk} damage! HP is now: ` + x
                );
                console.log("----------");
                userHP -= zombieAtk;
                console.log(
                    `${user} took ${zombieAtk} damage! HP is now: ` + userHP
                );
                console.log("----------");
            } else if (choice == 2) {
                let runChance = Math.random();
                if (runChance > 0.5) {
                    console.log(`You got away safely.`);
                    mainMenu();
                    break;
                } else {
                    console.log(
                        `The HULKING ZOMBIE grabs your leg as you try to flee...`
                    );
                }
            } else if (choice == `p`) {
                console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
            }
        } else {
            console.log(`WTF`);
        }
    }
};

while (isAlive == true) {
    mainMenu();
}
