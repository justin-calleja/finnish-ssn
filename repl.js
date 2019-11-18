#!/usr/bin/env node

const repl = require('repl')
const { FinnishSSN } = require('./dist/finnish-ssn')

const r = repl.start('> ')

r.context.FinnishSSN = FinnishSSN;

console.log('how to use:')
console.log(`> FinnishSSN.createWithDob('10','05',1996)`)
