var greeting = require('./greeting.json')

function sayHello()
{
    console.log(greeting.en);
}
module.exports = sayHello