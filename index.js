#!/usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import figlet from 'figlet';
import gradient from 'gradient-string';
import { createSpinner } from 'nanospinner';

let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const neonTitle = chalkAnimation.neon('Welcome to the CLI Quiz Game!\n');
    await sleep();
    neonTitle.stop();

    console.log(`${chalk.bgBlue('HOW TO PLAY')}
I am a process on your computer.
If you get any question wrong, I will be ${chalk.bgRed('killed')}
So get all the questions right... or else...!\n`);
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });
    playerName = answers.player_name;
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's correct!` });
    } else {
        spinner.error({ text: `Game over, ${playerName}!` });
        process.exit(1);
    }
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'select',
        message: 'Siapa orang yang suka sawit?',
        choices: [
            'Pak Wowo',
            'Pria Solo',
            'Pak Vincent',
            'Charlie Kirk',
        ],
    });
    return handleAnswer(answers.question_1 === 'Pak Wowo');
}
async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'select',
        message: 'Negara paling maju di dunia?',
        choices: [
            'India',
            'Indonesia',
            'Singapura',
            'China',
        ],
    });
    return handleAnswer(answers.question_3 === 'China');
}
async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'select',
        message: 'Siapa orang yang cinta dgn AI?',
        choices: [
            'Must A Nice',
            'Gibrun',
            'Pak Wowo',
            'Pria Berkacamata',
        ],
    });
    return handleAnswer(answers.question_4 === 'Gibrun');
}
async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'select',
        message: 'Siapa pemilik O2H?',
        choices: [
            'Umi Dera',
            'XXKanjut',
            'Lucifer Halimawan',
            'Abi Eja',
        ],
    });
    return handleAnswer(answers.question_5 === 'Lucifer Halimawan');
}



async function winner() {
    console.clear();
    const msg = `Congrats, ${playerName}!\nYou have won the CLI Quiz Game!`;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');
        process.exit(0);
    });
}

console.clear();
await welcome();
await askName();
await question1();
await question3();
await question4();
await question5();
await winner();