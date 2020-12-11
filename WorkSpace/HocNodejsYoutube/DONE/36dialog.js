'use strict'

var EventEmitter = require("events")

module.exports = class Dialog extends EventEmitter{
    constructor(){
        super()
        this.message = "Hello World"
    }

    sayHello(data){
    console.log(` ${this.message}: ${ data } `)
    this.emit("Hello", data)}
}