const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Initialized");

rl.question('', (answer) => {
    console.log(answer);

    rl.close();
});