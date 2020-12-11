// Khai bao cac thu vien, cac bien
var express = require('express') 
const pug = require('pug')

var app = express()
var port = 3000


app.set("views","./views")
app.set("view engine", "pug")


// Khai bao cac API
app.get("/", function(req,res) //Homepage           
{
    res.send("Welcome To Phong's Website")
})

app.get("/html", function(req,res)
{
    res.render('index')
})


//Listen port 
app.listen(port, function()
{
    console.log("Server running on port: ", port);
})