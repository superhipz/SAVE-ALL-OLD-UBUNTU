var EventEmitter = require("events")
var util = require ('util')

function Dialog(){
    EventEmitter.call(this)
    this.message = "Hello World"
}

util.inherits(Dialog, EventEmitter)  // Dialog là đối tượng muốn được kế thừa, EventEmitter là đối tượng cha được kế thừa

Dialog.prototype.sayHello = function (){
    console.log(this.message);
    this.emit("Hello") // Phát ra sự kiện hello
}

var dialog = new Dialog()
dialog.on("Hello", function(){  // đáp lại khi sự kiện hello xảy ra
    console.log("Co 1 loi chao moi");
})

dialog.sayHello("Mai Hoa")
