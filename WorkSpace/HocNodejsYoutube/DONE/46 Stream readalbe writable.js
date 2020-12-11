var fs = require('fs')
 
var readable = fs.createReadStream(__dirname + "/readme.txt",{
 encoding:"utf8",
 highWaterMark: 16*1024  
 }) //32kb 

var writable = fs.createWriteStream(__dirname + "/readmecopy.txt") // 

 readable.on("data", function(chunk)
{
    console.log(chunk.length);
    writable.write(chunk)
})
