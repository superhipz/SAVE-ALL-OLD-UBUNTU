var express = require('express')
var cookieParser = require('cookie-parser')
var mysql = require('mysql')
var app = express()

var apiController = require ('./controllers/apiController')
var homeController = require ('./controllers/homeController')



var port = 3000

app.use("/assets", express.static(__dirname + "/public"))
app.use(cookieParser())
app.set("view engine", "ejs")

app.use("/", function (req, res, next) {
    console.log("Request URL: ", req.url);
    req.requestTime = new Date()

    /*var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"",
        database: "Nodejs test Youtube"
    })

    connection.connect()
    connection.query("SELECT Gender,MaSV FROM `SinhVien` LEFT JOIN Birthday USING (Gender) ", function(err, rows)
    {
        if (err) {throw err}
        console.log(rows);
    })
    connection.end()*/

    next()
})

apiController(app)
homeController(app)


app.listen(port, function () {
    console.log("Server is listening on Port: ", port);
})