const colors = require('colors')
const readlineSync = require('readline-sync')
let a = readlineSync.question('Escribe el primer numero')
let b = readlineSync.question('Escribe el segundo numero')
let resultado

function sumar (a, b) {
  return parseInt(a) + parseInt(b)
}

console.log(`resultado de la suma \n${colors.blue('a')} ${a}\n${colors.yellow('b')} ${b}\n${colors.green('sumar')} ${sumar(a, b)}`)
