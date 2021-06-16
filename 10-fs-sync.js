const { readFileSync, writeFileSync } = require('fs')

console.log('start')
// Reading a file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// Writing to a file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

// Appending to a file
writeFileSync('./content/result-sync.txt', `Appending this string to the file`, { flag: 'a' })
console.log('done with this task')
console.log('starting the next one')