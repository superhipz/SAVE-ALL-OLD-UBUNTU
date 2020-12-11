var http = require ('http')
http.createServer(function(request,response)
{
  console.log('http://localhost:3000/');
  response.writeHead(200)
  response.write('Day la WebSite')
  
  response.end()
}).listen(3000)
console.log('Server is listening at localhost:3000');