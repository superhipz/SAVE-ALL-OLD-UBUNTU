var fs = require('fs')
var fileGoc = fs.createReadStream (_dirname + "ten File can copy.txt")
encoding: 'utf8'
highWaterMark: 2 * 1024

var fileCopyFromFileGoc = fs.createWriteStream (_dirname + "file se copy sang")
fileGoc.pipe(fileCopyFromFileGoc)
