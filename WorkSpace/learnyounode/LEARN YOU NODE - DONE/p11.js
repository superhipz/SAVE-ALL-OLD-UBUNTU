const http = require('http')
const fs = require ('fs')
var port = process.argv[2]
var fileurl = process.argv[3]
const server = http.createServer(function(req, res)
{
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream (fileurl.pipe(res)
  )
})
server.listen(port)