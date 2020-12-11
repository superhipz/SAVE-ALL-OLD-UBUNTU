const express = require ('express')
const pool = require ('./data/config')


const port = 3000

var app = express()

app.set("view engine", "ejs")

app.use("/assets", express.static(__dirname + "/public"))

// ------------------MIDDLEWARE ------------------------------------

app.use("/", function (req,res,next)
{
    req.requestTime = new Date()
    
    next()
})


app.use("/user/:id", function(req,res,next)
{
    console.log("Request URL: ", req.originalURL);
    next()
}, function (req,res,next)
{
    console.log("Request type: ", req.method );
    next()
})

app.use("/user/:id", function (req,res,next)
{
    console.log("ID: ", req.params.id);
    next()
})




// -------------------------API ----------------------------------------
app.get("/",function(req,res)
{
    res.end("Welcome to my Page !!")
})


app.get("/user/:id", function (req,res,next)
{
    res.end("Hello User: " + req.params.id);
})

app.get("/login", function(req,res)
{
    res.send()
})



//LISTEN ---------------------------------------------------------------------
app.listen(port, function()
{
    console.log("Server is running on Port: ", port);
})