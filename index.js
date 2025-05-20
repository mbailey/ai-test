#!/usr/bin/env node

const chalk = require('chalk');
const { getGreeting } = require('./lib/greeting');

// Get name from command-line arguments or use default
const name = process.argv[2] || 'world';

// Display greeting
console.log(chalk.blue(getGreeting(name)));