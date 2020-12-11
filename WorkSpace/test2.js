var EventEmitter = require('events')
var util = require ('util')

function Dialog(){
    console.log("CO chuyen xay ra");
}

util.inherits(Dialog, EventEmitter)

