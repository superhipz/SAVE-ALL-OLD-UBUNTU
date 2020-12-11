var cach1 = require('./cach1')
cach1()

var cach2 = require('./cach2').sayHello
cach2()

var cach3 = require ('./cach3')
cach3.sayHello()
cach3.message = "Changed to Xin Chao"

var cach32 = require ('./cach3')
cach32.sayHello()

var cach4 = require ('./cach4')
var Cach4 = new cach4()
Cach4.sayHello()

var cach5 = require('./cach5').sayHello
cach5()