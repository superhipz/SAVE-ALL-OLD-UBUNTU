function Home (width, length)
{
    this.width = width
    this.length = length
}

Home.prototype.getWidth = function()
{
    return this.width
}

Home.prototype.getLength = function()
{
    return this.length
}

Home.prototype.height = "18 m"

function House (width,length)
{
    this.width = width
    this.length = length
}

House.prototype = new Home();

var house1 = new House("12","15")
var home1 = new Home("14","17")


console.log(house1.getLength());
console.log(home1.getWidth());

