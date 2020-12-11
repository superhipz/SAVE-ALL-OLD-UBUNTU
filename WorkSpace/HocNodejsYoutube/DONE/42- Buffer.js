var buffer = new Buffer("Xin Chào", "utf8")

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString("ascii"));
console.log(buffer.toJSON());

console.log(buffer[2]);

buffer.write("hoa")    // ghi đè lên Xin chào
console.log(buffer.toString());