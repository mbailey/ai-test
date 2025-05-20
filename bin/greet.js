#!/usr/bin/env node

const chalk = require('chalk');
const { getGreeting, getFarewell } = require('../lib/greeting');

const args = process.argv.slice(2);
const command = args[0] || 'greet';
const name = args[1] || 'Jeannie';

try {
  if (command.toLowerCase() === 'greet') {
    console.log(chalk.blue(getGreeting(name)));
  } else if (command.toLowerCase() === 'farewell') {
    console.log(chalk.yellow(getFarewell(name)));
  } else {
    console.log(chalk.red(`Unknown command: ${command}`));
    console.log(chalk.white('Available commands: greet, farewell'));
  }
} catch (error) {
  console.error(chalk.red(`Error: ${error.message}`));
  process.exit(1);
}