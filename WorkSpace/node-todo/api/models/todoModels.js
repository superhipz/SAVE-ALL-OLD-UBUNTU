const mysql = require ('mysql')

var connection = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "phong2305",
    database: "NodeTodos",
    port: "3306"
})

connection.connect(function (err)
{
    if (err)
    {
        console.error(err)
        return
    }
})
connection.end()

module.exports = function(){
    connection : connection
}