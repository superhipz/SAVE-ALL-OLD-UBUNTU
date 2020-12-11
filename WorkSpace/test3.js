const fs = require ('fs')
const path = require ('path')
var folder = process.argv[2]
var ext = process.argv[3]

module.exports=function (){ 
    
    fs.readdir(folder, function (err,list)
{
    if (err) return console.log(err);;
    list = list.filter(function (file)
    {
        if (path.extname(file) === '.' + ext)
        console.log(file);

    })
})}

