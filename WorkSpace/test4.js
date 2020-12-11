var http = require('http')
var fs = require('fs')

http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type': 'text/html'})

    fs.readFile(__dirname+"/index.html", "utf8", function(err,data)
    {
        if (err) return console.log(err);
        data = html;
    } ) 
    
    
    
    var user = "Mai Hoa"
    html = html.replace("{user}", user)
    res.end(html)
}).listen(1337, "127.0.0.1")
console.log("Running on 127.0.0.1:1337");