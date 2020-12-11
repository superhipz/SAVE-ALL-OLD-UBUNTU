const express = require ('express')
const bodyparser = require ('body-parser')
const morgan = require ('morgan')
const connection = require('./api/models/todoModels')

const app = express()
var port = process.env.port || 3000

connection()

app.use("/assets", express.static(__dirname + "/public"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.use( morgan("dev"))

app.set("view engine", "ejs")

app.get("/", function (req,res)
{
    res.render("index")
})

app.listen(port, function()
{
    console.log("App is running on port: ", port);
})