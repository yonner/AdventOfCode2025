const fs = require('fs');
const path = require('path');


const INPUT_FILE = 'input.txt';

function readInput()
{
    try {
        const filePath = path.join(__dirname, INPUT_FILE);

        console.log(`Reading input from: ${filePath}`);
        return fs.readFileSync(filePath, 'utf8');
    } catch(error)
    {
        console.log(`Error reading the input file (${INPUT_FILE}):`,error.message);
        process.exit();
    }
}

function parseInput(rawInput)
{
    return rawInput.split(`\n`).filter(line => line.trim() !== ``);
}

function solvePart1(lines)
{
    console.log(`\n--- Running Part 1 ---`);

    let totalsum = 0;

    for (const line of lines) 
    {
        const digits = line.split('').filter(char => !isNaN(parseInt(char)));

        if (digits.length > 0) {
            const firstDigit = digits[0];

            const lastDigit = digits[digits.length -1];

            const calibrationValue = parseInt(firstDigit + lastDigit);

            totalsum += calibrationValue;
        }
    }

    return totalsum;
}

function solvePart2(lines)
{
    console.log(`\n--- Running Part 2 ---`);

    
}

function main() {
    const rawInput = readInput();
    
    const lines = parseInput(rawInput);

    const answer1 = solvePart1(lines);

    console.log(`\n✅ Part 1 Answer: ${answer1}`);
    
    const answer2 = solvePart2(lines);
    
    console.log(`\n✅ Part 2 Answer: ${answer2}`);
}

main();