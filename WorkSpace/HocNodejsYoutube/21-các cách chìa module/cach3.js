function Person()
{
    this.message= "Hello3" 
    this.sayHello = function()
    {
        console.log(this.message);
    }
}
module.exports = new Person()