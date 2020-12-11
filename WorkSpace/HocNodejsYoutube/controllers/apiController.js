module.exports = function (app) {
    app.get("/api/user/:id ", function (req, res) {
        //get data from database
        var result =
        {
            firstName: "Mai",
            lastName: "Hoa"
        }
        res.json(result)
    })

    app.post("/api/user", function (req, res) {
        //create new and save to database

    })

    app.put("/api/user", function (req, res) {
        //update user and save to database

    })

    app.delete("/api/user/:id", function (req, res) {
        //delete user from database
    })
}