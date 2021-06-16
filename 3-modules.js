// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");
require("./7-mind-grenade");

console.log(names);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
sayHi(john);
sayHi(peter);

// console.log(data)
