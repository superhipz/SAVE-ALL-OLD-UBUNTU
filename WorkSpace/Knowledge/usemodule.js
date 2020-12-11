var usemodule = require('./Mymodule')
usemodule.hello()
console.log('PI:' + usemodule.PI);
var Chunhat = new usemodule.Rectangle(2,3)   //Dùng new để khởi tạo đối tượng mới trong class
console.log(Chunhat);
Chunhat.showInfo()
