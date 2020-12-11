function Person()
{
    this.message = "Hello4"
    this.sayHello = function ()
    {
        console.log(this.message);
    }
}
module.exports = Person 