var bodyParser = require('body-parser')

var urlencodeParser = bodyParser.urlencoded({ extended: false })
var JsonParser = bodyParser.json()

module.exports = function (app) {

    

    app.get("/", function (req, res) {
        res.render("index")
    })

    app.post("/login", urlencodeParser, function (req, res) {
        res.send("Welcome, " + req.body.username)
        console.log(req.body.username);
        console.log(req.body.password);
    })

    app.post("/loginjson", JsonParser, function (req, res) {
        res.send("OK")
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    })
}