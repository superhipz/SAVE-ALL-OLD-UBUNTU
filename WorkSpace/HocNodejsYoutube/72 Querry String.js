var express = require ('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var urlencodeParser = bodyParser.urlencoded({extended: false})
var JsonParser = bodyParser.json()

var app = express ()
var port  = 3000

app.use("/assets", express.static(__dirname + "/public"))
app.use(cookieParser())
app.set("view engine","ejs")

//custom middleware
app.use("/", function(req,res,next)
{
    console.log("Request URL: ", req.url);
    req.requestTime = new Date()
    next()
})

app.get("/", function(req,res)
{
    res.render("index")
})

app.get("/api/user/:id " ,function(req,res)
{
    //get data from database
    var result =
    {
         firstName: "Mai",
         lastName: "Hoa"
    }
    res.json(result)
})

app.post("/api/user", JsonParser,function (req,res)
{
    //create new and save to database

})

app.put("/api/user", JsonParser,function (req,res)
{
    //update user and save to database
    
})

app.delete("/api/user/:id", function(req,res)
{
    //delete user from database
})


app.post("/login", urlencodeParser, function(req,res)
{
    res.send("Welcome, " + req.body.username)
    console.log(req.body.username);
    console.log(req.body.password);
})

app.post("/loginjson", JsonParser, function (req,res)
{
    res.send("OK")
    console.log(req.body.firstName);
    console.log(req.body.lastName);
})

app.listen(port, function()
{
    console.log("Server is listening on Port: ", port);
})