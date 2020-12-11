const Mymodule = require("../../Knowledge/Mymodule");

var greetings = require ('./greetings.json')
function sayHello ()
{
    console.log(greetings.vi);
}
module.exports = sayHello