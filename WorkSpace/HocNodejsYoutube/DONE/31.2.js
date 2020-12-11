var EventEmitter = require("events")
var util = require ('util')
function Dialog(){
    this.message = "Hello World"
}
util.inherits(Dialog, EventEmitter)  // Dialog là đối tượng muốn được kế thừa, EventEmitter là đối tượng cha được kế thừa

Dialog.prototype.sayHello = function (data){
    console.log(this.message + ':' + data);
    this.emit("Hello", data) // Phát ra sự kiện hello
}

var dialog = new Dialog()
dialog.on("Hello", function(data){  // đáp lại khi sự kiện hello xảy ra
    console.log("Co 1 loi chao moi" + data);
})
dialog.sayHello("Mai Hoa")