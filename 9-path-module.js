const path = require('path')
const { abort } = require('process')

console.log(path.sep)

const filePath = path.join(__dirname, '/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve('content', 'subfolder', 'test.txt')
console.log(absolute)