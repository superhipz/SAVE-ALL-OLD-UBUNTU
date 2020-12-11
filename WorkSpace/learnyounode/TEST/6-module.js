var fs = require ('fs')
var path = require ('path')
var filtered = []

module.exports= function (dir, filterStr, callback)
{
    fs.readdir(dir, function(err,list)
    {
        if (err) return callback(err)
        
        list.filter(function(file)
        {
            return (path.extname(file) === '.' + filterStr)
           
        })
            
        })callback (null,list)
    })
}