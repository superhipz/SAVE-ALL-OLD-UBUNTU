var express = require ('express')
var cookieParser = require('cookie-parser')

var app = express ()
var port  = 3000

app.use("/assets", express.static(__dirname + "/public"))
app.use(cookieParser())

//custom middleware
app.use("/", function(req,res,next)
{
    console.log("Request URL: ", req.url);
    req.requestTime = new Date()
    next()
})

app.get("/", function(req,res)
{
    console.log("Cookies: ", req.cookies);
    res.send(`
    <img src='/assets/img1.jpg' width="1000" heigh="2000" />
    <link href="/assets/style.css" rel="stylesheet" type="text/css" >
    <h1>Hello Express</h1>
    <p>RequestTime: ${req.requestTime}</p>
    `)
})

app.get("/api" ,function(req,res)
{
     res.json({
         firstName: "Mai",
         lastName: "Hoa"
     })
})
// user: id
// product/:id
//product/number/:pageNumber
app.get("/user/:id", function(req,res)
{
    res.cookie("username", req.params.id)
    res.send(`<h1>User: ${req.params.id}</h1>`)
})



app.listen(port, function()
{
    console.log("Server is listening on Port: ", port);
})