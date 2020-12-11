//Tránh tràn bộ nhớ khi có quá nhiều người truy cập
var http = require('http')
var fs = require('fs')

http.createServer(function (req,res)
{
    res.writeHead(200,{'content-type': 'text/html'})
    fs.createReadStream(__dirname + "/index.html").pipe(res)
    

}).listen(1337, "127.0.0.1")