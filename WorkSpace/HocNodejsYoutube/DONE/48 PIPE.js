var fs = require('fs')
var zlib = require('zlib')
 
var readable = fs.createReadStream(__dirname + "/readme.txt",{
 encoding:"utf8",
 highWaterMark: 16*1024  
 }) //32kb 

var writable = fs.createWriteStream(__dirname + "/readmecopy.txt") // 
var compressed = fs.createWriteStream(__dirname + "/readme.txt.gz")

var gzip = zlib.createGzip()

readable.pipe(writable) //copy

readable.pipe(gzip).pipe(compressed) // nén 