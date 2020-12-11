var http = require('http')
var fs = require('fs')

http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type': 'application/json'})
    
    var obj = {
        firstName: "Hoa",
        lastName: "Mai"
    }


    res.end(JSON.stringify(obj))
}).listen(1337, "127.0.0.1", function(){
console.log("server listening on localhost:1337");

})
