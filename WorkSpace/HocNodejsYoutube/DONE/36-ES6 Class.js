'use strict'

var Dialog = require ('./36dialog')

var dialog = new Dialog()
dialog.on("Hello", function(data){  // đáp lại khi sự kiện hello xảy ra
    console.log("Co 1 loi chao moi", data);
})

dialog.sayHello("Mai Hoa")
