//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-first_module');
const sayHi = require('./5-second_module');
const data = require('./6-alternative-export')
require('./7-mind_grenade')
console.log(data);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
