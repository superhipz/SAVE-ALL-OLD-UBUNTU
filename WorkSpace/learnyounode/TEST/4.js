var fs = require('fs')
var path = process.argv[2]

fs.readFile(path, function (err,data)
{
    if (err) return console.error(err);
    data=data.toString().split('\n').length -1
    console.log(data);
})